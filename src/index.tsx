import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles";

import App from "./App";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./styles/Theme.styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={myTheme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
);
