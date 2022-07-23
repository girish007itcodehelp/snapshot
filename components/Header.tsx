import {
  Avatar,
  Box,
  Container,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Switch,
  Text,
  useColorMode,
  WrapItem,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronsDown, FiSearch } from "react-icons/fi";
import React from "react";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="white" boxShadow="md">
      <Container py="15px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="15px"
        >
          <Box display="flex">
            <Text
              bgGradient="linear(to-t, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              Snapshot
            </Text>
          </Box>
          <Box flexGrow={1} maxW="550px">
            <InputGroup>
              <Input type="text" placeholder="Search here..." />
              <InputRightAddon children={<FiSearch />} />
            </InputGroup>
          </Box>
          {/* <Box>
            <Switch id="email-alerts" size="lg" />
          </Box> */}
          <Box>
            <WrapItem
              transition="all 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11),transform 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11),visibility 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11)"
              _hover={{ bg: "gray.100" }}
              borderRadius="md"
              p="0 15px"
              alignItems="center"
              gap="15px"
            >
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />{" "}
              <Text
                // fontWeight="bold"
                color="gray.500"
                display="flex"
                alignItems="center"
                gap="15px"
              >
                John smith <Icon as={FiChevronDown} />
              </Text>
            </WrapItem>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
