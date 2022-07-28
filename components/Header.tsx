import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { signInWithGoogle } from "../firebase/authFunctions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/clientApp";

import React, { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import ProfileMenu from "./ProfileMenu";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [authUser, setAuthUser] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) setAuthUser(user);
      console.log("user =>", user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Box
      bg={useColorModeValue("white", "#1f2a33")}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="banner"
    >
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

            {/* profile start */}
            <Box>
              {authUser ? (
                <ProfileMenu user={authUser} />
              ) : (
                <Button variant="solid" onClick={signInWithGoogle}>
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
