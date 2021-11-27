import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../../../styles/theme";

import { Card } from "./index";

const withStyledTheme = (component: React.ReactElement) => (
  <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>
);

describe("Card", () => {
  it("renders children as label", () => {
    render(withStyledTheme(<Card>Hello</Card>));

    expect(screen.getByText("Hello")).toBeDefined();
  });
});
