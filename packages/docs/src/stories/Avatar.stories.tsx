
import { Avatar, AvatarProps } from "@guerber-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
    title: "Data display/Avatar",
    component: Avatar,
    args: {
        src: "https://github.com/JVGS1111.png",
        alt: "Guerber"
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
    args: {
        src: "https://github.com/JVGS1111.png"
    }
}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
};