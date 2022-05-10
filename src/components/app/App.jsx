import React from "react";
import Main from "../main/Main";
import Header from "../header/Header";
import AppRouter from "../app-router/AppRouter";

const App = () => {
  return (
    <Main>
      <Header />
      <AppRouter />
    </Main>
  );
};

export default App;
