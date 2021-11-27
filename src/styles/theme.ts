import { DefaultTheme } from "styled-components";
import { px } from "../common/services/styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: px(4),
  spacing: [2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160].map(px),
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "red",
      contrastText: "yellow",
    },
    secondary: {
      main: "blue",
      contrastText: "cyan",
    },
  },
};
