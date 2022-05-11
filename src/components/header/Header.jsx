import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { SHeader, SLogo } from "./styles";
import { observer } from "mobx-react";

const Header = observer(() => {
  return (
    <SHeader>
      <SLogo>devfinder</SLogo>
      <ThemeSwitcher />
    </SHeader>
  );
});

export default Header;
