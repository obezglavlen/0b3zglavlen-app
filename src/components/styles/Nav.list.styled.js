import styled, { css } from "styled-components";

const NavListStyled = styled.ul`
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

const NavItemStyled = styled.li`
    line-height: 100%;
    padding: ${(props) => props.padding || "1rem"};
    cursor: pointer;
`;

export {NavListStyled, NavItemStyled}