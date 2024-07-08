
import { Button, ButtonProps } from "@guerber-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
    title: "Button",
    component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: "Enviar"
    }
}

export const Big: StoryObj<ButtonProps> = {
    args: {
        size: "big",
        children: "Enviar",
    }
}