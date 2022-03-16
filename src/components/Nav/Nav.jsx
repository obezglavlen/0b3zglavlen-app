import List from "./List";
import Item from "./Item";
import { NavStyled } from "../styles";

const Nav = (props) => {
    return <NavStyled {...props} />;
};

Nav.Item = Item;
Nav.List = List;

export default Nav;
