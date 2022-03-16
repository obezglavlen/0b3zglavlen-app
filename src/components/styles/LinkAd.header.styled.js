import styled from "styled-components";

const LinkAdHeaderStyled = styled.legend`
    color: ${(props) => props.color || props.theme.colors.secondary};
`;

export default LinkAdHeaderStyled;
