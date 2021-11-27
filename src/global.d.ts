declare global {
  type AnyProps = Record<string, unknown>;
  type AnyComponent = (props: StyledProps) => JSX.Element;
}

export {};
