/* https://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable */
import React from "react";

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
        onPaste: this.onPaste,
        onBlur: this.props.onBlur || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: {
          __html:
            `<span class="lang-title" style="writing-mode: horizontal-tb; font-family: var(--default-latin-sans); font-size: 1rem; position: absolute; top: -1.5rem; left: 15px;" contenteditable="false">${props.lang}</span>` +
            html,
        },
      },
      this.props.children
    );
  }

  shouldComponentUpdate(nextProps) {
    const clonedHtmlEl = this.htmlEl.cloneNode(true);
    for (let elem of clonedHtmlEl.getElementsByClassName("lang-title")) {
      elem.remove();
    }

    /* console.log(clonedHtmlEl.innerHTML);
    console.log(nextProps.html);
    console.log(this.props.html); */

    // We need not rerender if the change of props simply reflects the user's
    // edits. Rerendering in this case would make the cursor/caret jump.
    return (
      // Rerender if there is no element yet... (somehow?)
      !this.htmlEl ||
      // ...or if html really changed... (programmatically, not by user edit)
      (nextProps.html !== clonedHtmlEl.innerHTML &&
        nextProps.html !== this.props.html) ||
      // ...or if editing is enabled or disabled.
      this.props.disabled !== nextProps.disabled
    );
  }

  componentDidUpdate() {
    const { lang } = this.props;
    if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
      // Perhaps React (whose VDOM gets outdated because we often prevent
      // rerendering) did not update the DOM. So we update it manually now.
      this.htmlEl.innerHTML =
        `<span class="lang-title" style="writing-mode: horizontal-tb; font-family: var(--default-latin-sans); font-size: 1rem; position: absolute; top: -1.5rem; left: 15px;" contenteditable="false">${lang}</span>` +
        this.props.html;
    }
  }

  onPaste(evt) {
    evt.preventDefault();
    const text = evt.clipboardData.getData("text");
    document.execCommand("insertText", false, text);
  }

  emitChange(evt) {
    if (!this.htmlEl) return;
    var html = this.htmlEl.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      const clonedHtmlEl = this.htmlEl.cloneNode(true);
      for (let elem of clonedHtmlEl.getElementsByClassName("lang-title")) {
        elem.remove();
      }

      // evt.target = { value: html };
      evt.target = { value: clonedHtmlEl.innerHTML };
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  }
}

export default ContentEditable;
