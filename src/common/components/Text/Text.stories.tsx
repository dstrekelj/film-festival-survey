import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./index";

export default {
  title: "Common/Text",
} as ComponentMeta<typeof Text.Text>;

const HeadingStory: ComponentStory<typeof Text.Heading> = (args) => (
  <Text.Heading {...args} />
);

export const Heading = HeadingStory.bind({});
Heading.args = {
  as: "h1",
  children: "Hello world!",
};

const EyebrowStory: ComponentStory<typeof Text.Eyebrow> = (args) => (
  <Text.Eyebrow {...args} />
);

export const Eyebrow = EyebrowStory.bind({});
Eyebrow.args = {
  as: "p",
  children: "Hello world!",
};

const ParagraphStory: ComponentStory<typeof Text.Paragraph> = (args) => (
  <Text.Paragraph {...args} />
);

export const Paragraph = ParagraphStory.bind({});
Paragraph.args = {
  as: "p",
  children: "Hello world!",
};

const CaptionStory: ComponentStory<typeof Text.Caption> = (args) => (
  <Text.Caption {...args} />
);

export const Caption = CaptionStory.bind({});
Caption.args = {
  as: "label",
  children: "Hello world!",
};
