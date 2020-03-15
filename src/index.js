import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "rc-slider/assets/index.css";
import { App } from "./components/App";
import { overmind } from "./logic";
import { Provider } from "overmind-react";

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById("root")
);
