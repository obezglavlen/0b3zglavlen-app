import { forwardRef } from "react";
import Flex from "../Flex";

const CheckBox = forwardRef(({ title, id, ...props }, ref) => (
  <Flex direction="row" gap="5px">
    <input type="checkbox" ref={ref} id={id} {...props} />
    <label style={{ color: "white" }} htmlFor={id}>
      {title}
    </label>
  </Flex>
));

export default CheckBox;
