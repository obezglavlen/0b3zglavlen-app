import { forwardRef } from "react";
import styled from "styled-components";

const PasswordStyled = styled.textarea`
    color: ${(props) => props.color || props.theme.colors.secondary};
    background: ${(props) => props.bg || props.theme.colors.accent};
    width: min(28rem, 80%);
    height: ${(props) => props.height || "auto"};
    -webkit-text-security: ${(props) =>
        props.type === "password" ? "disc" : "none"};
    resize: none;
    font-size: 28px;
    margin: ${(props) => props.margin || 0};

    @media ${(props) => props.theme.breakPoints.phone} {
        font-size: 22px;
    }
`;

const InputPassword = forwardRef((props, ref) => {
    return <PasswordStyled {...props} ref={ref} />;
});

export default InputPassword;
