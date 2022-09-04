import React from "react";
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
import Project from "../types/Project";
import { GrGithub } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { SECONDARY } from "../utils/constants/Theme";
import useGetProjectLanguages from "../hooks/useGetProjectLanguages";

const Card: React.FC<Project> = ({
  name,
  description,
  languages,
  html_url,
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
            {html_url !== "" ? (
              <Icon
                w={6}
                h={6}
                color="white"
                _hover={{ color: "#66fcf1", cursor: "pointer" }}
                as={GrGithub}
                onClick={() => window.open(html_url)}
              />
            ) : null}
            {homepage !== "" ? (
              <Icon
                w={6}
                h={6}
                color="white"
                _hover={{ color: "#66fcf1", cursor: "pointer" }}
                as={FiExternalLink}
                onClick={() => window.open(homepage)}
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
