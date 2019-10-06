// React unifies DOM and Styiling in JavaScript:
// -lets you create functions(components) that return jsx (js w/ xml)
// -lets you interact directly with APIs (in this case through the axios pkg)
// -lets you include styling right in your JavaScript

import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
