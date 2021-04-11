/* https://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable */
import React, { Component } from "react";
import ReactDOM from "react-dom";

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

class ContentEditable extends Component {
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
}

export default ContentEditable;
