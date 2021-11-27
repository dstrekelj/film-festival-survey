import styled from "styled-components";

import { Props } from "./Card.types";

export const StyledCard = styled.div<Props>`
  background-color: ${(p) => p.theme.palette.common.white};
  box-shadow: 1px 1px 4px rgba(61, 56, 41, 0.1),
    4px 4px 12px rgba(61, 56, 41, 0.2);
  border-radius: ${(p) => p.theme.borderRadius};
  padding: ${(p) => p.theme.spacing[5]};
`;
