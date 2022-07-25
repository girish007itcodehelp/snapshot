import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronsDown, FiSearch } from "react-icons/fi";
import { HiSun } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("white", "#1f2a33")} boxShadow="md">
      <Container py="15px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="15px"
        >
          <Box display="flex">
            <Text
              // bgGradient="linear(to-t, #766fe4, #FF0080)"
              // bgClip="text"
              // bg="#766fe4"
              color="#766fe4"
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
          <Box display="flex" alignItems="center" gap="15px">
            <Box>
              {/* <Switch
                id="email-alerts"
                size="lg"
                isChecked={colorMode !== "light"}
                onChange={toggleColorMode}
              /> */}
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <BsFillMoonFill /> : <HiSun />}
              </Button> */}
              <Button
                onClick={toggleColorMode}
                _hover={{
                  bg: useColorModeValue("gray.100", "#223544"),
                }}
              >
                {colorMode === "light" ? (
                  <BsFillMoonFill color="#766fe4" />
                ) : (
                  <ImSun color="#766fe4" />
                )}
              </Button>
            </Box>
            <WrapItem
              transition="all 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11),transform 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11),visibility 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11)"
              _hover={{ bg: useColorModeValue("gray.100", "#223544") }}
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
