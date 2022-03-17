import styled from "styled-components";

const HeaderStyled = styled.h1`
    color: ${(props) => props.color || props.theme.colors.secondary};
    padding: 1rem;
    outline: 2px solid ${(props) => props.color};
`;

export default HeaderStyled;
