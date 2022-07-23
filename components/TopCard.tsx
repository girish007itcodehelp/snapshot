import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiPlusSm } from "react-icons/hi";

const TopCard: React.FC = () => {
  return (
    <Box>
      <Flex p="15px" gap="15px">
        {/* <Box
          display="flex"
          alignItems="center"
          p="5px 15px"
          bg="gray.50"
          borderRadius="2xl"
          transition="all 200ms cubic-bezier(0.345, 0.115, 0.135, 1.42),
          opacity 150ms ease-out"
          _hover={{
            bg: "gray.100",
          }}
        >
          <Icon as={HiPlusSm} />
          <Text>New</Text>
        </Box> */}

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
