import styled from "styled-components";

const LinkAdItemStyled = styled.a`
    color: ${(props) => props.color || props.theme.colors.secondary};
    font-size: 20px;
`;

const LinkAdItemImageStyled = styled.img`
    height: 18px;
    margin-right: 5px;
    background: ${(props) => props.bg || "transparent"};
    border-radius: ${(props) => props.radius || 0};
`;

const Item = ({ children, href, img = null, ...props }) => {
    return (
        <LinkAdItemStyled href={href} {...props}>
            {img ? (
                <LinkAdItemImageStyled
                    src={img}
                    alt={children}
                    {...props}
                ></LinkAdItemImageStyled>
            ) : null}
            {children ? children : href}
        </LinkAdItemStyled>
    );
};

export default Item;
