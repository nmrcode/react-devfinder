import React from "react";
import styled from "styled-components";

export const SWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const Main = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Main;
