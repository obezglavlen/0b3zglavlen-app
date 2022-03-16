import styled from "styled-components";
import FlexStyled from "./Flex.styled";

const NavStyled = styled(FlexStyled)`
    width: 100%;
    height: ${(props) => props.height || "3rem"};
    color: ${(props) => props.color || props.theme.colors.secondary};
    background: ${(props) => props.bgColor || props.theme.colors.accent};
    flex-direction: row;
`;

export default NavStyled;
