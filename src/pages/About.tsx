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

const About = () => {
  const { aboutScreenChange } = useScreenWatch();

  return (
    <React.Fragment>
      <Center bg={BACKGROUND} h="100vh">
        {aboutScreenChange ? (
          <Container minW="70vw">
            <VStack>
              <Heading color={PRIMARY} w="65vw">
                Who am I?
              </Heading>
              <StyledContainer styling={{ marginRight: "5vw" }}>
                <Text fontSize="xl" w="65vw" mb="8" textAlign="left">
                  I am a Software Developer who currently resides in Oklahoma
                  working for Paycom. I enjoy creating software of all kinds and
                  bringing to life something enjoyable and functional for
                  people!
                </Text>
                <Text fontSize="xl" w="65vw" mt="8" mb="8">
                  Hard-working indvidual, highly responsible, individual worker.
                  Loves to watch the NBA and loves to do anything outside!
                  Married to the most amazing wife!
                </Text>
                <Text fontSize="xl" w="65vw" mt="8">
                  I'm interested in all things on the web and mobile! I mainly
                  work with React, C#, and PHP, but I enjoy learning new things!
                </Text>
              </StyledContainer>
              <Image
                zIndex={100}
                h="400px"
                w="600px"
                src="/static/images/aboutpicture.jpg"
              />
            </VStack>
          </Container>
        ) : (
          <Container minW="70vw">
            <Heading color={PRIMARY}>Who am I?</Heading>
            <HStack>
              <StyledContainer styling={{ marginRight: "5vw" }}>
                <Text fontSize="xl" w="30vw" mb="8">
                  I am a Software Developer who currently resides in Oklahoma
                  working for Paycom. I enjoy creating software of all kinds and
                  bringing to life something enjoyable and functional for
                  people!
                </Text>
                <Text fontSize="xl" w="30vw" mt="8" mb="8">
                  Hard-working indvidual, highly responsible, individual worker.
                  Loves to watch the NBA and loves to do anything outside!
                  Married to the most amazing wife!
                </Text>
                <Text fontSize="xl" w="30vw" mt="8">
                  I'm interested in all things on the web and mobile! I mainly
                  work with React, C#, and PHP, but I enjoy learning new things!
                </Text>
              </StyledContainer>
              <Image
                zIndex={100}
                h="400px"
                w="600px"
                src="/static/images/aboutpicture.jpg"
              />
            </HStack>
          </Container>
        )}
      </Center>
    </React.Fragment>
  );
};

export default About;
