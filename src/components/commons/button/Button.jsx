import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.shape.radii};

  padding: 15px 22px;

  color: #fff;
  font-family: inherit;

  cursor: pointer;
`;

const Button = ({ children }) => {
  return <SButton>{children}</SButton>;
};

export default Button;
