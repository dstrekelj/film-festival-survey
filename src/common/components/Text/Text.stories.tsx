import { Story, Meta } from "@storybook/react";
import { Text, Props } from "./index";

export default {
  title: "Common/Text",
  component: Text,
} as Meta;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "The quick brown fox jumps over the lazy dog",
};
