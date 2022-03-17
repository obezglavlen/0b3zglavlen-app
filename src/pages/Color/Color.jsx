import { useState } from "react";
import { Flex } from "../../components";
import { IFrameStyled } from "../../components/styles";

const Color = () => {
    return (
        <Flex align="center" justify="center" height="100%" distanse="1rem">
            <IFrameStyled
                title="color"
                src="https://colorpicker.me#container"
                height="100%"
                width="100%"
            />
        </Flex>
    );
};

export default Color;
