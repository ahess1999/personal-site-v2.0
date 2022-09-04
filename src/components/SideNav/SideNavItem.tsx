import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Route from "../../types/Route";

const SideNavItem: React.FC<Route> = ({ title, url }) => {
  const navigate = useNavigate();

  return (
    <Box w="100%" h="60px">
      <Button
        w="100%"
        h="100%"
        color="#45a29e"
        variant="unstyled"
        onClick={() => navigate(url)}
        _hover={{ color: "#66fcf1" }}
        fontWeight="light"
        fontSize="18px"
      >
        {title}
      </Button>
    </Box>
  );
};

export default SideNavItem;
