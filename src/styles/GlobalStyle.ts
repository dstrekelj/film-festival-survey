import { createGlobalStyle } from "styled-components";
import { resetStyle } from "./reset";
import { fontFaces } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}
  ${fontFaces}

  html {
    font-size: 16px;
  }

  body {
    font-family: "Roboto", serif;
  }
`;
