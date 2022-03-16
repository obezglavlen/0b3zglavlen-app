import React from "react";
import styled, { css } from "styled-components";

const ListStyled = styled.ul`
    display: flex;
    flex-direction: row;
    gap: ${(props) => props.distance || "2rem"};
    height: 100%;
    width: fit-content;
    list-style: none;

    ${(props) => {
        return (
            (props.left &&
                css`
                    float: left;
                `) ||
            (props.right &&
                css`
                    float: right;
                `) ||
            (props.center &&
                css`
                    margin: 0 auto;
                `)
        );
    }}
`;

const List = (props) => {
    return <ListStyled {...props} />;
};

export default List;
