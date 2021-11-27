export interface Props extends React.ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: Size;
  isFullWidth?: boolean;
}

export type Variant = "primary" | "secondary";

export type Size = "small" | "medium" | "large";
