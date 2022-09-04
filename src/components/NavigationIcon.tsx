import React from "react";
import { Icon } from "@chakra-ui/react";
import { StyledContainer } from "./StyledComponents";
import { GiHamburgerMenu } from "react-icons/gi";
import { PRIMARY, SECONDARY } from "../utils/constants/Theme";

interface NavigactionIconProps {
  handleIconClick: (sideNavOpen: boolean, translate: string) => void;
}

const NavigationIcon: React.FC<NavigactionIconProps> = ({
  handleIconClick,
}) => {
  return (
    <StyledContainer
      styling={{
        position: "absolute",
      }}
    >
      <Icon
        w={8}
        h={8}
        ml={2}
        mt={2}
        color={SECONDARY}
        _hover={{ color: PRIMARY, cursor: "pointer" }}
        as={GiHamburgerMenu}
        onClick={() => handleIconClick(true, "0")}
      />
    </StyledContainer>
  );
};

export default NavigationIcon;
