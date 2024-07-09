import { Text, TextProps } from "@guerber-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolore vitae ipsam, sint veniam reiciendis eos consequatur praesentium, sequi nisi ea sunt dignissimos ullam totam, voluptate corrupti. Maxime, quos laborum."
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Strong text",
        as: "strong"
    }
}