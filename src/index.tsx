import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import App from "./components/App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);