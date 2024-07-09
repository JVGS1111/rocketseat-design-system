import React, { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> { };

export function Avatar() {
    return (
        <AvatarContainer>
            <AvatarImage src="" />
            <AvatarFallback delayMs={600}>
                <User />
            </AvatarFallback>

        </AvatarContainer>
    )
}