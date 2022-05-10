import React from "react";
import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SLogo = styled.div`
  font-weight: 700;
`;

const Header = () => {
  return (
    <SHeader>
      <SLogo>devfinder</SLogo>
      <ThemeSwitcher />
    </SHeader>
  );
};

export default Header;
