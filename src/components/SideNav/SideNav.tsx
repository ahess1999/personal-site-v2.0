import React from "react";
import { StyledContainer } from "../StyledComponents";
import SideNavContent from "./SideNavContent";
import SideNavFooter from "./SideNavFooter";
import SideNavHeader from "./SideNavHeader";

interface SideNavProps {
  translateX: string;
  isSideNavOpen: boolean;
  handleIconClick: (sideNavOpen: boolean, translate: string) => void;
  smallScreen: boolean;
}

const SideNav: React.FC<SideNavProps> = ({
  translateX,
  isSideNavOpen,
  handleIconClick,
  smallScreen,
}) => {
  let styling = isSideNavOpen
    ? {
        position: "fixed",
        width: "225px",
        height: "100vh",
        backgroundColor: "#2a2e35",
        zIndex: "100",
        transform: `translateX(${translateX}%)`,
        transition: "ease 300ms",
      }
    : {
        position: "fixed",
        float: "left",
        width: "225px",
        height: "100vh",
        backgroundColor: "#2a2e35",
        zIndex: "100",
        transform: `translateX(${translateX}%)`,
        transition: "ease 300ms",
      };

  return (
    <StyledContainer styling={styling}>
      <SideNavHeader
        handleIconClick={handleIconClick}
        smallScreen={smallScreen}
      />
      <SideNavContent />
      <SideNavFooter />
    </StyledContainer>
  );
};

export default SideNav;
