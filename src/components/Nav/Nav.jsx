import React from "react";
import styled from "styled-components";
import List from "./List";
import Item from "./Item";

const NavStyled = styled.nav`
    width: 100%;
    height: ${(props) => props.height || "3rem"};

    color: ${(props) => props.color || props.theme.colors.secondary};
    margin-bottom: ${(props) => props.marginBotton || "2rem"};
    background: ${(props) => props.bgColor || props.theme.colors.accent};
    display: flex;
    flex-direction: row;
`;

const Nav = (props) => {
    return <NavStyled {...props} />;
};

Nav.Item = Item;
Nav.List = List;

export default Nav;
