import React from "react";
import Main from "../main/Main";
import Header from "../header/Header";
import AppRouter from "../app-router/AppRouter";
import GlobalStyles from "../../styled/global";
import { ThemeProvider } from "styled-components";
import { useRootStore } from "../../providers/RootStoreProvider";
import { observer } from "mobx-react";
import { baseTheme, darkTheme } from "../../styled/theme";

const App = observer(() => {
  const { themeStore } = useRootStore();

  return (
    <ThemeProvider theme={themeStore.theme === "base" ? baseTheme : darkTheme}>
      <GlobalStyles />
      <Main>
        <Header />
        <AppRouter />
      </Main>
    </ThemeProvider>
  );
});

export default App;
