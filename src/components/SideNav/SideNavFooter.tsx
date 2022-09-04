import React from "react";
import { HStack, Center, Icon } from "@chakra-ui/react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const SideNavFooter: React.FC = () => {
  return (
    <Center mt="200px">
      <HStack>
        <Icon
          w={6}
          h={6}
          mr={8}
          color="white"
          _hover={{ color: "#66fcf1", cursor: "pointer" }}
          as={GrGithub}
          onClick={() => window.open("https://github.com/ahess1999")}
        />
        <Icon
          w={6}
          h={6}
          ml={8}
          color="white"
          _hover={{ color: "#66fcf1", cursor: "pointer" }}
          as={GrLinkedin}
          onClick={() =>
            window.open("https://www.linkedin.com/in/austin-hess-282042218/")
          }
        />
      </HStack>
    </Center>
  );
};

export default SideNavFooter;
