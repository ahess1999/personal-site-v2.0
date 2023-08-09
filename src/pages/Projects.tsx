import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import useFetchProjects from "../hooks/useFetchProjects";
import useScreenWatch from "../hooks/useScreenWatch";
import { PRIMARY, SECONDARY } from "../utils/constants/Theme";

const Projects: React.FC = () => {
  const { projects, isLoading } = useFetchProjects();
  const { smallScreen, mediumScreen } = useScreenWatch();

  return (
    <Center bg="#1f2833" pb="24px" pt="48px" h={isLoading ? "100vh" : "auto"}>
      <Container minW="50vw" margin="0">
        <Heading
          mb="20px"
          color={PRIMARY}
          mt={smallScreen || mediumScreen ? "50px" : "10px"}
        >
          Projects
        </Heading>
        <Text mb="32px" color="white">
          Here is a list of the projects that I've worked on, along with links
          that will take you to the projects and if possible, a link to the repo
          where the source code is located!
        </Text>
        {isLoading ? (
          <Center>
            <Spinner color={SECONDARY} />
          </Center>
        ) : (
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 1, xl: 2 }} spacing={6}>
            {projects.map((value, key) => {
              return <Card key={key} {...value} />;
            })}
          </SimpleGrid>
        )}
      </Container>
    </Center>
  );
};

export default Projects;
