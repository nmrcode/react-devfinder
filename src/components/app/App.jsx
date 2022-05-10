import React from "react";
import Main from "../main/Main";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ReposPage from "../pages/ReposPage";

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/repos"} element={<ReposPage />} />
      </Routes>
    </Main>
  );
};

export default App;
