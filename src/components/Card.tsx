import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { GrGithub } from "react-icons/gr";
import useGetProjectLanguages from "../hooks/useGetProjectLanguages";
import Project from "../types/Project";
import { SECONDARY } from "../utils/constants/Theme";

const Card: React.FC<Project> = ({
  name,
  description,
  languages,
  htmlUrl,
  homepage,
}) => {
  const { projectLanguges } = useGetProjectLanguages(languages);

  return (
    <Box bg="#273446" p={5} shadow="md" h="250px" zIndex={2}>
      <VStack alignItems="flex-start" h="100%">
        <Heading fontSize="xl" color={SECONDARY}>
          {name}
        </Heading>
        <Text color="white">{description}</Text>
        <Flex direction="column" justifyContent="flex-end" h="100%">
          <HStack h="auto" mb="8px" maxWidth="230px">
            {homepage && homepage !== "" ? (
              <Icon
                w={6}
                h={6}
                color="white"
                _hover={{ color: "#66fcf1", cursor: "pointer" }}
                as={FiExternalLink}
                onClick={() => window.open(homepage)}
              />
            ) : null}
            {htmlUrl && htmlUrl !== "" ? (
              <Icon
                w={6}
                h={6}
                color="white"
                _hover={{ color: "#66fcf1", cursor: "pointer" }}
                as={GrGithub}
                onClick={() => window.open(htmlUrl)}
              />
            ) : null}
          </HStack>
          <HStack>
            {projectLanguges.map((value, key) => {
              return <Badge key={key}>{value}</Badge>;
            })}
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Card;
