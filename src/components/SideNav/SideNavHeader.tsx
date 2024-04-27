import { Avatar, Center, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { PRIMARY, SECONDARY } from "../../utils/constants/Theme";

interface SideNavHeaderProps {
  handleIconClick: (sideNavOpen: boolean, translate: string) => void;
  smallScreen: boolean;
}

const SideNavHeader: React.FC<SideNavHeaderProps> = ({
  handleIconClick,
  smallScreen,
}) => {
  return (
    <Center mt="25px">
      {smallScreen ? (
        <Icon
          position="absolute"
          top="8px"
          right="8px"
          w={8}
          h={8}
          color={SECONDARY}
          _hover={{ color: PRIMARY, cursor: "pointer" }}
          as={BsChevronLeft}
          onClick={() => handleIconClick(false, "-100")}
        />
      ) : null}
      <VStack>
        <Avatar src="/static/images/navpic.JPG" size="2xl" />
        <Text fontSize="3xl" fontWeight="bold" color="#66fcf1">
          Austin
        </Text>
        <Text textAlign="center" color="white">
          Team Leader of Software Development
        </Text>
      </VStack>
    </Center>
  );
};

export default SideNavHeader;
