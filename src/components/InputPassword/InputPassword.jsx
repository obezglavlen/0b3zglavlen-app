import { forwardRef } from "react";
import { TextAreaStyled } from "../styles";

const InputPassword = forwardRef((props, ref) => {
    return <TextAreaStyled {...props} ref={ref} />;
});

export default InputPassword;
