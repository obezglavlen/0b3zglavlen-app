import styled, { css } from "styled-components";

const TextAreaStyled = styled.textarea`
    color: ${(props) => props.color || props.theme.colors.secondary};
    background: ${(props) => props.bg || props.theme.colors.accent};
    width: ${(props) => props.width || "min(28rem, 80%)"};
    height: ${(props) => props.height || "auto"};
    -webkit-text-security: ${(props) =>
        props.type === "password" ? "disc" : "none"};
    resize: none;
    font-size: ${(props) => props.fontSize || "28px"};
    margin: ${(props) => props.margin || 0};

    @media ${(props) => props.theme.breakPoints.phone} {
        font-size: 22px;
    }
`;

export default TextAreaStyled;
