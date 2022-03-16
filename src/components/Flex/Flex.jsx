import styled from "styled-components";

const FlexStyled = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || "column"};
    justify-content: ${(props) => props.justify || "stretch"};
    align-items: ${(props) => props.align || "stretch"};
    margin: ${(props) => props.margin || "0"};
    height: ${(props) => props.height || "auto"};
    background-color: ${(props) => props.bgColor || "none"};
    gap: ${(props) => props.distanse || "auto"};
`;

const Flex = (props) => {
    return <FlexStyled {...props} />;
};

export default Flex;
