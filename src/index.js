import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import { RootStoreProvider } from "./providers/RootStoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootStoreProvider>
        <App />
      </RootStoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
