import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { SHeader, SLogo } from "./styles";

const Header = () => {
  return (
    <SHeader>
      <SLogo>devfinder</SLogo>
      <ThemeSwitcher />
    </SHeader>
  );
};

export default Header;
