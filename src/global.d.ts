import React from "react";

declare global {
  type AnyProps = Record<string, unknown>;
  type AnyComponent = (props: StyledProps) => JSX.Element;

  // @see https://www.fullstacklabs.co/blog/overload-typescript-react-component-interfaces-prop-values

  type DistributiveOmit<T, K extends keyof any> = T extends any
    ? Omit<T, K>
    : never;

  type VoidElement =
    | "area"
    | "base"
    | "br"
    | "col"
    | "hr"
    | "img"
    | "input"
    | "link"
    | "meta"
    | "param"
    | "command"
    | "keygen"
    | "source";

  type OmitChildrenFromVoid<C extends React.ElementType> = C extends VoidElement
    ? Omit<React.ComponentPropsWithRef<C>, "children">
    : React.ComponentPropsWithRef<C>;

  interface OverloadedElement<P> {
    <C extends React.ElementType>(
      props: { as: C } & P & DistributiveOmit<OmitChildrenFromVoid<C>, keyof P>
    ): JSX.Element;
    (
      props: P & DistributiveOmit<React.ComponentPropsWithRef<"div">, keyof P>
    ): JSX.Element;
  }
}

export {};
