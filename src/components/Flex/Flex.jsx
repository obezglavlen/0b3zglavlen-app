import styled from "styled-components";

const FlexStyled = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || "column"};
    justify-content: ${({ justify }) => justify || "stretch"};
    align-items: ${(props) => props.align || "stretch"};
    margin: ${({ margin }) => margin || "0"};
    height: ${({ height }) => height || "auto"};
`;

const Flex = (props) => {
    return <FlexStyled {...props} />;
};

export default Flex;
