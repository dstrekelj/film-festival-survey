import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../../../styles/theme";

import { Button } from "./index";

const withStyledTheme = (component: React.ReactElement) => (
  <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>
);

describe("Button", () => {
  it("renders children as label", () => {
    render(withStyledTheme(<Button>Hello</Button>));

    expect(screen.getByRole("button")).toHaveTextContent("Hello");
  });

  it("applies default type of button", () => {
    render(withStyledTheme(<Button>Hello</Button>));

    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("applies specific type if provided", () => {
    render(withStyledTheme(<Button type="submit">Hello</Button>));

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("applies valid attribute to element", () => {
    render(withStyledTheme(<Button aria-label="foo">Hello</Button>));

    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "foo");
  });
});
