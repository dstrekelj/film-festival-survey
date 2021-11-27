import React from "react";
import PropTypes from "prop-types";

import { StyledText } from "./Text.style";
import * as Types from "./Text.types";

export const Text = (props: React.PropsWithChildren<Types.Props>) => (
  <StyledText {...props} />
);

StyledText.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "caption",
    "eyebrow",
    "heading",
    "paragraph",
  ] as const).isRequired,
};

StyledText.defaultProps = {
  as: "div",
  variant: "paragraph",
};
