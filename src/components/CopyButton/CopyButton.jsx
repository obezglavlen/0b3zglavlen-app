import { CopyButtonStyled } from "../styles";

const CopyButton = (props) => {
    return (
        <CopyButtonStyled
            width="4rem"
            height="4rem"
            border="20px"
            {...props}
        />
    );
};

export default CopyButton;
