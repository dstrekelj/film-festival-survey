import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../../../styles/theme";

import { Text } from "./index";

const withStyledTheme = (component: React.ReactElement) => (
  <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>
);

describe("Text", () => {
  it("renders children as label", () => {
    render(withStyledTheme(<Text>Hello</Text>));

    expect(screen.getByText("Hello")).toBeDefined();
  });
});
