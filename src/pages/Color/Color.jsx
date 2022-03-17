import { useState } from "react";
import { Button, Flex } from "../../components";
import styled, { css } from "styled-components";

const getRandomColor = () => {
    const canPick = "123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i += 1) {
        newColor += canPick[Math.floor(Math.random() * 15)];
    }
    return newColor;
};

function invertColor(hex) {
    if (hex.indexOf("#") === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error("Invalid HEX color.");
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join("0");
    return (zeros + str).slice(-len);
}

const Text = styled.h1`
    color: ${(props) => props.color || props.theme.colors.secondary};
    padding: 1rem;
    outline: 2px solid ${(props) => props.color};
`;

const Color = () => {
    const [color, setColor] = useState(getRandomColor());

    const changeColor = () => {
        setColor(getRandomColor());
    };

    const copy = () => {
        navigator.clipboard.writeText(color);
    };

    return (
        <Flex align="center" justify="center" height="100%" distanse="1rem">
            <iframe
                title="color"
                src="https://colorpicker.me#container"
                seamless
                height="100%"
                width="100%"
                style={{ border: "none" }}
            />
        </Flex>
    );
};

export default Color;
