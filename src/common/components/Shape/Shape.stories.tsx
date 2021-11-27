import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Shape } from "./index";

export default {
  title: "Common/Shape",
  component: Shape,
} as ComponentMeta<typeof Shape>;

const Template: ComponentStory<typeof Shape> = (args) => <Shape {...args} />;

export const Rectangle = Template.bind({});
Rectangle.args = { type: "rectangle" };

export const Rounded = Template.bind({});
Rounded.args = { type: "rounded" };

export const Square = Template.bind({});
Square.args = { type: "square" };

export const Circle = Template.bind({});
Circle.args = { type: "circle" };

export const Oval = Template.bind({});
Oval.args = { type: "oval" };
