/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ headerTitle, contentText, actions, onDismiss }) => {
  // This is how to mount a modal into a div specific at the spa injection point
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{headerTitle}</div>
        <div className="content">{contentText}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
