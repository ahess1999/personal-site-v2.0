import React from "react";
import { Center, Container, Text } from "@chakra-ui/react";
import { BACKGROUND, PRIMARY, SECONDARY } from "../utils/constants/Theme";

const TitlePage: React.FC = () => {
  return (
    <React.Fragment>
      <Center bg={BACKGROUND} h="100vh">
        <Container minW="60vw">
          <Text>Hello! I'm</Text>
          <Text fontSize="8xl" fontWeight="bold" color={PRIMARY}>
            Austin Hess
          </Text>
          <Text fontSize="8xl" fontWeight="bold" color={SECONDARY}>
            Software Developer
          </Text>
          <Text w="500px">
            Software developer who currently resides in Oklahoma City, OK and is
            currently working as a Software Developer for Paycom
          </Text>
        </Container>
      </Center>
    </React.Fragment>
  );
};

export default TitlePage;
