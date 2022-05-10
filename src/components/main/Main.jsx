import React from "react";
import styled from "styled-components";

export const SWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Main = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Main;
