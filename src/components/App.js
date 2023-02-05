import React, { useState, useRef } from "react";
import "../styles/App.css";
import PortalButton from "./PortalButton.js";
import PortalTextArea from "./PortalTextArea.js";

//complete the function
const App = () => {
  const inputRef = useRef(null);
  const [val, setVal] = useState("");
  const changeText = () => {
    setVal(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div id="main">
      <input id="input" ref={inputRef}></input>
      <br />
      <PortalButton buttonclick={changeText} />
      <br />
      <PortalTextArea valu1={val} />
    </div>
  );
};

export default App;
