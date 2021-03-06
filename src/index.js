import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

var myReduxStore = createStore(reducer);

ReactDOM.render(
  <Provider store={myReduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
