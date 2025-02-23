import { Center, Container, Text } from "@chakra-ui/react";
import React from "react";
import useScreenWatch from "../hooks/useScreenWatch";
import { BACKGROUND, PRIMARY, SECONDARY } from "../utils/constants/Theme";

const TitlePage: React.FC = () => {
  const { smallScreen, mediumScreen } = useScreenWatch();

  return (
    <Center bg={BACKGROUND} h="100vh">
      <Container minW="60vw">
        <Text color="white">Hello! I'm</Text>
        <Text
          fontSize={smallScreen || mediumScreen ? "6xl" : "8xl"}
          fontWeight="bold"
          color={PRIMARY}
        >
          Austin Hess
        </Text>
        <Text
          fontSize={smallScreen || mediumScreen ? "6xl" : "8xl"}
          fontWeight="bold"
          color={SECONDARY}
        >
          Software Developer
        </Text>
        <Text w={smallScreen || mediumScreen ? "70vw" : "500px"} color="white">
          Team Leader of Software Development who currently resides in Oklahoma City and is
          working for Paycom
        </Text>
      </Container>
    </Center>
  );
};

export default TitlePage;
