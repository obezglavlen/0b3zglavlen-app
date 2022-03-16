import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
    background-color: ${(props) => props.bgColor || props.theme.colors.accent};
    color: ${(props) => props.color || props.theme.colors.secondary};
    border: none;
    height: ${(props) => props.height || "2rem"};
    width: ${(props) => props.width || "fit-content"};
    padding: ${(props) => props.padding || "0.2rem 1rem"};
    cursor: pointer;

    ${(props) =>
        props.outLined &&
        css`
            outline: solid
                ${(props) =>
                    props.outLineColor ||
                    props.color ||
                    props.theme.colors.secondary};
        `};

    outline-width: ${(props) => props.outLineWidth || "1px"};
    border-radius: ${(props) => props.border || 0};
`;

export default ButtonStyled;
