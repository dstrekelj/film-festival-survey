import { Story, Meta } from "@storybook/react";
import { Button, Props } from "./index";

export default {
  title: "Common/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "My button",
  disabled: false,
};
