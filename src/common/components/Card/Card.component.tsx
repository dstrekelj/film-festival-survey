import React from "react";
import PropTypes from "prop-types";

import { StyledCard } from "./Card.style";
import * as Types from "./Card.types";

export const Card = (props: React.PropsWithChildren<Types.Props>) => (
  <StyledCard {...props} />
);

Card.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "caption",
    "eyebrow",
    "heading",
    "paragraph",
  ] as const).isRequired,
};

Card.defaultProps = {
  as: "div",
  variant: "paragraph",
};
