import Flex from "../../components/Flex";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex height="100vh" direction="column" justify="center" align="center">
      <h1 style={{ fontSize: "40rem", position: "absolute", zIndex: 0 }}>?</h1>
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ zIndex: 1 }}
      >
        <h1 style={{ color: "white" }}>Not Found</h1>
        <h2 style={{ color: "white" }}>404</h2>
      </Flex>
    </Flex>
  );
};

export default NotFound;
