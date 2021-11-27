import React from "react";

interface BaseProps {
  as?: React.ElementType;
  variant?: Variant;
}

export type Props = React.PropsWithChildren<BaseProps>;

export type Variant = "caption" | "paragraph" | "eyebrow" | "heading";
