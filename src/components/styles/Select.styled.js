import styled from "styled-components";

const SelectStyled = styled.select`
  outline: none;
  height: 2rem;
  width: 10rem;
  font-size: 20px;
  background-color: ${({ theme: { colors } }) => colors.accent};
  color: ${({ theme: { colors } }) => colors.secondary};
  margin: 20px 0;
`;

export default SelectStyled;
