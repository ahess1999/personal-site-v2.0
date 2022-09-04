import React from "react";
import { Center, Container, Text } from "@chakra-ui/react";
import { BACKGROUND, PRIMARY, SECONDARY } from "../utils/constants/Theme";
import useScreenWatch from "../hooks/useScreenWatch";

const TitlePage: React.FC = () => {
  const { smallScreen } = useScreenWatch();

  return (
    <Center bg={BACKGROUND} h={smallScreen ? "auto" : "100vh"}>
      <Container minW="60vw">
        <Text color="white">Hello! I'm</Text>
        <Text
          fontSize={smallScreen ? "7xl" : "8xl"}
          fontWeight="bold"
          color={PRIMARY}
        >
          Austin Hess
        </Text>
        <Text
          fontSize={smallScreen ? "7xl" : "8xl"}
          fontWeight="bold"
          color={SECONDARY}
        >
          Software Developer
        </Text>
        <Text w={smallScreen ? "80vw" : "500px"} color="white">
          Software developer who currently resides in Oklahoma City, OK and is
          currently working as a Software Developer for Paycom
        </Text>
      </Container>
    </Center>
  );
};

export default TitlePage;
