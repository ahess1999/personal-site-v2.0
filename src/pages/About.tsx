import React from "react";
import {
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { StyledContainer } from "../components/StyledComponents";
import useScreenWatch from "../hooks/useScreenWatch";
import { BACKGROUND, PRIMARY } from "../utils/constants/Theme";
import aboutPicture from "../assets/aboutpicture.JPG";

const About = () => {
  const { smallScreen, mediumScreen, aboutScreenChange } = useScreenWatch();

  return (
    <React.Fragment>
      <Center bg={BACKGROUND} h={smallScreen ? "auto" : "100vh"} pb="24px">
        {aboutScreenChange ? (
          <Container
            minW="70vw"
            mt={smallScreen || mediumScreen ? "80px" : "0"}
          >
            <VStack>
              <Heading color={PRIMARY} w="65vw">
                Who am I?
              </Heading>
              <StyledContainer styling={{ marginRight: "5vw" }}>
                <Text
                  fontSize="xl"
                  w="65vw"
                  mb="8"
                  textAlign="left"
                  color="white"
                >
                  I am a Software Developer who currently resides in Oklahoma
                  working for Paycom. I enjoy creating software of all kinds and
                  bringing to life something enjoyable and functional for
                  people!
                </Text>
                <Text fontSize="xl" w="65vw" mt="8" mb="8" color="white">
                  Hard-working indvidual, highly responsible, individual worker.
                  Loves to watch the NBA and loves to do anything outside!
                  Married to the most amazing wife!
                </Text>
                <Text fontSize="xl" w="65vw" mt="8" color="white">
                  I'm interested in all things on the web and mobile! I mainly
                  work with React, C#, and PHP, but I enjoy learning new things!
                </Text>
              </StyledContainer>
              <Image
                zIndex={100}
                h="400px"
                w={smallScreen ? "90vw" : "600px"}
                src={aboutPicture}
              />
            </VStack>
          </Container>
        ) : (
          <Container minW="70vw">
            <Heading color={PRIMARY}>Who am I?</Heading>
            <HStack>
              <StyledContainer styling={{ marginRight: "5vw" }}>
                <Text fontSize="lg" w="30vw" mb="8" color="white">
                  I am a Software Developer who currently resides in Oklahoma
                  working for Paycom. I enjoy creating software of all kinds and
                  bringing to life something enjoyable and functional for
                  people!
                </Text>
                <Text fontSize="lg" w="30vw" mt="8" mb="8" color="white">
                  Hard-working indvidual, highly responsible, individual worker.
                  Loves to watch the NBA and loves to do anything outside!
                  Married to the most amazing wife!
                </Text>
                <Text fontSize="lg" w="30vw" mt="8" color="white">
                  I'm interested in all things on the web and mobile! I mainly
                  work with React, C#, and PHP, but I enjoy learning new things!
                </Text>
              </StyledContainer>
              <Image zIndex={100} h="400px" w="550px" src={aboutPicture} />
            </HStack>
          </Container>
        )}
      </Center>
    </React.Fragment>
  );
};

export default About;
