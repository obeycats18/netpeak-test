import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

// Semantic UI Styles
import "semantic-ui-css/semantic.min.css";

// Redux Store
import { store } from "./store/store";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
