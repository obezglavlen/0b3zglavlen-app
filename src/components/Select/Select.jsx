import { useRef, forwardRef } from "react";
import { SelectStyled } from "../styles";

const Select = forwardRef(({ options, Default, ...props }, ref) => {
  return (
    <SelectStyled
      {...props}
      defaultValue={Default && options[Default]}
      ref={ref}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </SelectStyled>
  );
});

export default Select;
