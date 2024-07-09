
import { Avatar, AvatarProps } from "@guerber-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
    title: "Data display/Avatar",
    component: Avatar,
    args: {
        src: "https://github.com/JVGS1111.png",
        alt: "Guerber"
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
};