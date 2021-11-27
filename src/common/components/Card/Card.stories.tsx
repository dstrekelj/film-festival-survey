import { Story, Meta } from "@storybook/react";
import { Card, Props } from "./index";

export default {
  title: "Common/Card",
  component: Card,
} as Meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "The quick brown fox jumps over the lazy dog",
};
