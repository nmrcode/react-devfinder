import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ReposPage from "../pages/ReposPage";

const AppRouter = () => (
  <Routes>
    <Route path={"/"} element={<MainPage />} />
    <Route path={"/repos"} element={<ReposPage />} />
  </Routes>
);

export default AppRouter;
