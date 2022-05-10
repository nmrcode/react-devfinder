import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/app/App";
import GlobalStyles from "./styled/global";
import { baseTheme } from "./styled/theme";
import { RootStoreProvider } from "./providers/RootStoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootStoreProvider>
        <ThemeProvider theme={baseTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </RootStoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
