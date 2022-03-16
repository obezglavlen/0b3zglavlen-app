import { forwardRef } from "react";
import styled from "styled-components";

const PasswordStyled = styled.textarea`
    color: ${({ color, theme: { colors } }) => color || colors.secondary};
    background: ${({ bg, theme: { colors } }) => bg || colors.accent};
    width: min(28rem, 80%);
    height: ${({ height }) => height || "auto"};
    -webkit-text-security: ${({ type }) =>
        type === "password" ? "disc" : "none"};
    resize: none;
    font-size: 28px;
    margin: ${({ margin }) => margin || 0};

    @media ${(props) => props.theme.breakPoints.phone} {
        font-size: 22px;
    }
`;

const InputPassword = forwardRef((props, ref) => {
    return <PasswordStyled {...props} ref={ref} />;
});

export default InputPassword;
