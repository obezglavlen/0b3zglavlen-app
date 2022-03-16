import { NavItemStyled } from "../../styles";
import { useNavigate } from "react-router-dom";

const Item = ({ to, ...props }) => {
    const navigate = useNavigate();

    return <NavItemStyled {...props} onClick={() => navigate(to)} />;
};

export default Item;
