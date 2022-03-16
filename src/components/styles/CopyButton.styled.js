import ButtonStyled from "./Button.styled";
import styled from "styled-components";

const CopyButtonStyled = styled(ButtonStyled)`
    display: none;
    font-size: 28px;

    @media ${(props) => props.theme.breakPoints.phone} {
        display: block;
    }
`;

export default CopyButtonStyled;
