import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  a {
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    color: inherit;
    cursor: pointer;
    font-family: inherit
  }

  body {
    font-family: 'Source Code Pro', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.bgDark};
  }
`;

export default GlobalStyles;
