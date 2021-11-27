import styled from "styled-components";

export const Text = styled.div`
  font-family: Roboto, sans-serif;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const Heading = styled(Text)`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 2%;
  font-weight: 900;
`;

export const Eyebrow = styled(Text)`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 2%;
  font-weight: 300;
`;

export const Paragraph = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2%;
  font-weight: 400;
`;

export const Caption = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 4px;
  font-weight: 400;
  text-transform: uppercase;
`;
