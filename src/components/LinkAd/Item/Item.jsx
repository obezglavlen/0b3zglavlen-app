import { LinkAdItemStyled, LinkAdItemImageStyled } from "../../styles";

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
