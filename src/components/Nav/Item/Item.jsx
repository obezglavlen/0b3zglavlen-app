import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ItemStyled = styled.li`
    line-height: 100%;
    padding: ${(props) => props.padding || "1rem"};
    cursor: pointer;
`;

const Item = ({ to, ...props }) => {
    const navigate = useNavigate();

    return <ItemStyled {...props} onClick={() => navigate(to)} />;
};

export default Item;
