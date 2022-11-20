import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// router
import { BrowserRouter as Router } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
