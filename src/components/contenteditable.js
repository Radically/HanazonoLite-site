/* https://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable */
import React, { Component } from "react";

/* const x = React.createClass({
  render: function () {
    return (
      <div
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      ></div>
    );
  },
  shouldComponentUpdate: function (nextProps) {
    return nextProps.html !== this.getDOMNode().innerHTML;
  },
  emitChange: function () {
    var html = this.getDOMNode().innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html,
        },
      });
    }
    this.lastHtml = html;
  },
}); */

/* class ContentEditable extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML;
  }
  emitChange() {
    var html = ReactDOM.findDOMNode(this).innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html,
        },
      });
    }
    this.lastHtml = html;
  }

  render() {
    return (
      <div
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      ></div>
    );
  }
} */

class ContentEditable extends React.Component {
  constructor() {
    super();
    this.emitChange = this.emitChange.bind(this);
  }

  render() {
    var { tagName, html, onChange, ...props } = this.props;

    return React.createElement(
      tagName || "div",
      {
        ...props,
        ref: (e) => (this.htmlEl = e),
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: { __html: html },
      },
      this.props.children
    );
  }

  shouldComponentUpdate(nextProps) {
    // console.log("should update");
    // console.log(nextProps);
    // We need not rerender if the change of props simply reflects the user's
    // edits. Rerendering in this case would make the cursor/caret jump.
    return (
      // Rerender if there is no element yet... (somehow?)
      !this.htmlEl ||
      // ...or if html really changed... (programmatically, not by user edit)
      (nextProps.html !== this.htmlEl.innerHTML &&
        nextProps.html !== this.props.html) ||
      // ...or if editing is enabled or disabled.
      this.props.disabled !== nextProps.disabled ||
      // or if direction changed
      nextProps.direction !== this.props.direction ||
      nextProps.typeface !== this.props.typeface
    );
  }

  componentDidUpdate() {
    if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
      // Perhaps React (whose VDOM gets outdated because we often prevent
      // rerendering) did not update the DOM. So we update it manually now.
      this.htmlEl.innerHTML = this.props.html;
    }
  }

  emitChange(evt) {
    if (!this.htmlEl) return;
    var html = this.htmlEl.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      evt.target = { value: html };
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  }
}

export default ContentEditable;
