import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./containers/Homepage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Documentation from "./containers/Documentation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/documentation" Component={Documentation} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
