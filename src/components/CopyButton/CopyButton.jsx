import styled from "styled-components";

const CopyButtonStyled = styled.button`
    display: none;
    height: 4rem;
    width: 4rem;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.accent};
    font-size: 28px;
    border-radius: 5px;

    @media ${(props) => props.theme.breakPoints.phone} {
        display: block;
    }
`;

const CopyButton = (props) => {
    return <CopyButtonStyled {...props} />;
};

export default CopyButton;
