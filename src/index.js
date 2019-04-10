import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HookUseStateExample from "./hook-useState-example.jsx";

function App() {
  return (
    <div className="App">
      <HookUseStateExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
