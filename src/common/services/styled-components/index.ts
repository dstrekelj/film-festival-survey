import { css } from "styled-components";

export const unit = (v: number, u: string): string => v + u;
export const px = (v: number) => unit(v, "px");
export const em = (v: number) => unit(v, "em");
export const rem = (v: number) => unit(v, "rem");
export const vh = (v: number) => unit(v, "vh");
export const vw = (v: number) => unit(v, "vw");
export const pct = (v: number) => unit(v, "%");

export function fontFace(
  expressions: [family: string, style: string, weight: number, url: string][]
) {
  const templateStrings = expressions.map(
    ([family, style, weight, url]) => `
      @font-face {
        font-family: ${family};
        font-style: ${style};
        font-weight: ${weight};
        src: url("${url}");
      }
    `
  );

  return css`
    ${templateStrings.join("\n")}
  `;
}
