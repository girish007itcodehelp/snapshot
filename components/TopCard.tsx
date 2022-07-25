import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiPlusSm } from "react-icons/hi";

const TopCard: React.FC = () => {
  return (
    <Box>
      <Flex p="15px" gap="15px">
        <Button leftIcon={<HiPlusSm />} borderRadius="3xl" variant="solid">
          New
        </Button>
        <Button leftIcon={<FiChevronDown />} borderRadius="3xl" variant="solid">
          Filter
        </Button>
      </Flex>
    </Box>
  );
};

export default TopCard;
