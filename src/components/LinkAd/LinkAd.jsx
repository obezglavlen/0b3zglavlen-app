import Item from "./Item";
import Header from "./Header";
import { LinkAdStyled } from "../styles";

const LinkAd = (props) => {
    return <LinkAdStyled {...props} />;
};

LinkAd.Item = Item;
LinkAd.Header = Header;

export default LinkAd;
