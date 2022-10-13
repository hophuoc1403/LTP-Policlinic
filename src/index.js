import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import { ParallaxProvider } from "react-scroll-parallax";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import GLobalState from "./GlobalState";
import productCart from "./redux/userReducer";

const store = configureStore({
  reducer: {
    productCart: productCart,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    root.render(
    <Provider store={store}>
      <GLobalState>
        <App />
      </GLobalState>
    </Provider>
    );
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
