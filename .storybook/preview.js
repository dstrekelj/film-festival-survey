import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/theme";
import { GlobalStyle } from "../src/styles/GlobalStyle";

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyle />
          <Story />
        </>
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
