import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body,
  button,
  input {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: inherit;
  }

  .container {
    max-width: 1170px;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;
  }
`;
