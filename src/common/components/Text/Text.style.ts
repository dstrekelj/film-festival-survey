import styled, {
  css,
  DefaultTheme,
  ThemedStyledProps,
} from "styled-components";

import { px, pct } from "../../services/styled-components";

import { Props } from "./Text.types";

const fontStyles = (p: ThemedStyledProps<Props, DefaultTheme>) => {
  let fontSize, lineHeight, letterSpacing, fontWeight, textTransform;

  switch (p.variant) {
    case "caption":
      fontSize = px(12);
      lineHeight = px(18);
      letterSpacing = px(0.04 * 12);
      fontWeight = 400;
      textTransform = "uppercase";
      break;
    case "eyebrow":
      fontSize = px(18);
      lineHeight = px(28);
      letterSpacing = px(0.02 * 18);
      fontWeight = 300;
      break;
    case "heading":
      fontSize = px(24);
      lineHeight = px(36);
      letterSpacing = px(0.02 * 24);
      fontWeight = 900;
      break;
    case "paragraph":
      fontSize = px(16);
      lineHeight = px(24);
      letterSpacing = px(0.02 * 16);
      fontWeight = 400;
      break;
    default:
    // nop
  }

  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
  `;
};

export const StyledText = styled.span<Props>`
  ${fontStyles}
`;
