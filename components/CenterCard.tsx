import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const CenterCard: React.FC = () => {
  return (
    <Box
      my="15px"
      boxShadow="md"
      bg={useColorModeValue("white", "#1f2a33")}
      borderRadius="md"
    >
      CenterCard
    </Box>
  );
};

export default CenterCard;
