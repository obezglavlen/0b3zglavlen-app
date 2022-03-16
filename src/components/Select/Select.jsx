import { useRef, forwardRef } from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
    outline: none;
    height: 2rem;
    width: 10rem;
    font-size: 20px;
    background-color: ${({ theme: { colors } }) => colors.accent};
    color: ${({ theme: { colors } }) => colors.secondary};
`;

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
