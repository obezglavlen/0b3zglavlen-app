import Item from "./Item";
import Header from "./Header";
import styled from "styled-components";

const LinkAdStyled = styled.fieldset`
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    height: ${(props) => props.height || "auto"};
    width: ${(props) => props.width || "auto"};
    padding: 0.2rem 0.5rem 0.5rem 0.5rem;
    border: solid 1px ${(props) => props.color || props.theme.colors.secondary};
    border-radius: 2px;
    background-color: ${(props) =>
        props.bgColor || props.theme.colors.primary};
`;

const LinkAd = (props) => {
    return <LinkAdStyled {...props} />;
};

LinkAd.Item = Item;
LinkAd.Header = Header;

export default LinkAd;
