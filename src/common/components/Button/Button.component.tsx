import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Button.style";
import * as Types from "./Button.types";

export const Button = React.forwardRef<HTMLButtonElement, Types.Props>(
  (props, ref) => (
    <StyledButton {...props} ref={ref}>
      {props.children}
    </StyledButton>
  )
);

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "secondary"] as const).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"] as const).isRequired,
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  size: "large",
  isFullWidth: false,
};
