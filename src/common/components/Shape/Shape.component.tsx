import styled from "styled-components";

type StyledProps = AnyProps;

const StyledRectangle = styled.div<StyledProps>`
  border: 1px solid black;
`;

const StyledRounded = styled.div<StyledProps>`
  border: 1px solid black;
  border-radius: 4px;
`;

const StyledOval = styled.div<StyledProps>`
  border: 1px solid black;
  border-radius: 100%;
`;

const StyledSquare = styled.div<StyledProps>`
  border: 1px solid black;
  width: 100px;
  height: 100px;
`;

const StyledCircle = styled.div<StyledProps>`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

type ShapeType = "rectangle" | "rounded" | "square" | "circle" | "oval";

export type Props = {
  /**
   * One of predefined shape types
   */
  type: ShapeType;
};

const shapeMap: Record<Shape.ShapeType, AnyComponent> = {
  circle: StyledCircle,
  rectangle: StyledRectangle,
  rounded: StyledRounded,
  square: StyledSquare,
  oval: StyledOval,
};

export const Component = (props: Props) => {
  const BaseShape = shapeMap[props.type];
  return <BaseShape>Shape</BaseShape>;
};
