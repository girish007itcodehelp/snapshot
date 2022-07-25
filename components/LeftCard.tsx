import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const LeftCard: React.FC = () => {
  return (
    <Box
      boxShadow="md"
      bg={useColorModeValue("white", "#1f2a33")}
      borderRadius="md"
      overflow="hidden"
    >
      <Box>
        <Box
          p="15px"
          borderBottom="0.5px solid"
          borderColor={useColorModeValue("gray.100", "gray.900")}
          _hover={{
            bg: useColorModeValue("blackAlpha.100", "gray.500"),
          }}
        >
          Facts
        </Box>
        <Box
          p="15px"
          borderBottom="0.5px solid"
          borderColor={useColorModeValue("gray.100", "gray.900")}
          _hover={{
            bg: useColorModeValue("blackAlpha.100", "gray.500"),
          }}
        >
          News
        </Box>
        <Box
          p="15px"
          borderBottom="0.5px solid"
          borderColor={useColorModeValue("gray.100", "gray.900")}
          _hover={{
            bg: useColorModeValue("blackAlpha.100", "gray.500"),
          }}
        >
          Most Popular
        </Box>
        <Box
          p="15px"
          borderColor={useColorModeValue("gray.100", "gray.900")}
          _hover={{
            bg: useColorModeValue("blackAlpha.100", "gray.500"),
          }}
        >
          Trending
        </Box>
      </Box>
    </Box>
  );
};

export default LeftCard;
