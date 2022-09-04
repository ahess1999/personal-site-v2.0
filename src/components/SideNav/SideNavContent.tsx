import React from "react";
import { VStack } from "@chakra-ui/react";
import Route from "../../types/Route";
import { ROUTES } from "../../utils/constants/Routes";
import SideNavItem from "./SideNavItem";
import { BlackLine } from "../StyledComponents";

const SideNavContent: React.FC = () => {
  return (
    <VStack mt="100px" spacing={0}>
      <BlackLine width="100%" color="#575555" />
      {ROUTES.map((value: Route, index: number) => {
        return (
          <React.Fragment key={index}>
            <SideNavItem {...value} />
            <BlackLine width="100%" color="#575555" />
          </React.Fragment>
        );
      })}
    </VStack>
  );
};

export default SideNavContent;
