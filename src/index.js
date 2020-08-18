import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "react-conflux";
import { gridReducer } from "./store/gridReducer";
import { gridContext } from "./store/contexts";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <StateProvider reducer={gridReducer} stateContext={gridContext}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
