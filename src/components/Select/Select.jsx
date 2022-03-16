import { useRef, forwardRef } from "react";
import { SelectStyled } from "../styles";

const Select = forwardRef(({ options, ...props }, ref) => {
    return (
        <SelectStyled {...props} ref={ref}>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </SelectStyled>
    );
});

export default Select;
