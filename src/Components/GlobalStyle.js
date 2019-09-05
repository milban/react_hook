import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a{
        text-decoration:none;
        color:inherit;
    }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    padding: 1rem 0;
  }
`;

export default GlobalStyle;
