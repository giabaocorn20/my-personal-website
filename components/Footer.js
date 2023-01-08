import {
  Flex,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const Footer = () => {

  return (
    <Box bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")} mt={4}>
      <Flex align="center" my={4} direction="column">
        <Container centerContent>
          <h5 className="text-center text-muted">
            <small>&copy; {new Date().getFullYear()}</small>
          </h5>

          <h5 className="text-center text-muted">
            <small>All Rights Reserved</small>
          </h5>
        </Container>
      </Flex>
    </Box>
  );
};

export default Footer;
