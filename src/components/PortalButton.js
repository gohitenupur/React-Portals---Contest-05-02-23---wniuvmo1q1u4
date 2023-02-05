import React from "react";
import ReactDOM from "react-dom";

//complete this function using portals
const PortalButton = (props) => {
  return ReactDOM.createPortal(
    <div>
      <button
        id="button"
        onClick={() => {
          props.buttonClick();
        }}
      >
        Click
      </button>
    </div>,
    document.getElementById("portal-button")
  );
};
export default PortalButton;

//portal-button id will be used here for portal purpose
