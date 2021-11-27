import styled, {
  css,
  DefaultTheme,
  ThemedStyledProps,
} from "styled-components";

import { px } from "../../services/styled-components";

import { Props } from "./Button.types";

const colorStyles = (p: ThemedStyledProps<Props, DefaultTheme>) => {
  let color, backgroundColor;

  if (p.variant === "primary") {
    color = p.theme.palette.primary.contrastText;
    backgroundColor = p.theme.palette.primary.main;
  } else {
    color = p.theme.palette.secondary.contrastText;
    backgroundColor = p.theme.palette.secondary.main;
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${backgroundColor};

    &:focus-visible {
      border-color: ${color};
    }
  `;
};

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  display: ${(p) => (p.isFullWidth ? "block" : "inline-block")};
  width: ${(p) => p.isFullWidth && "100%"};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: ${px(1)} solid transparent;
  padding: ${(p) => p.theme.spacing[2]} ${(p) => p.theme.spacing[4]};
  border-radius: 0;

  ${colorStyles}

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
    opacity: 0.5;
  }
`;
