import { UpArrow, DownArrow } from "@assets/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import Img, { shimmer, toBase64 } from "./Image";

const CenterCard: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Box
      my="15px"
      boxShadow="md"
      bg={useColorModeValue("white", "#1f2a33")}
      borderRadius="md"
    >
      <Flex>
        <Box
          borderRight="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.700")}
          p="15px"
        >
          <Box>
            <Icon
              fontSize={40}
              as={AiFillCaretUp}
              color={
                active ? "#766fe4" : useColorModeValue("gray.500", "gray.600")
              }
              cursor="pointer"
              onClick={() => setActive(!active)}
            />
          </Box>
          <Flex alignItems="center" justifyContent="center">
            1
          </Flex>
          <Box>
            <Icon
              fontSize={40}
              as={AiFillCaretDown}
              color={
                !active ? "#766fe4" : useColorModeValue("gray.500", "gray.600")
              }
              cursor="pointer"
              onClick={() => setActive(!active)}
            />
          </Box>
          <Flex alignItems="center" justifyContent="center">
            <Icon
              as={FaRegCommentDots}
              color={useColorModeValue("gray.500", "gray.600")}
              fontSize={26}
            />
          </Flex>
          {/* <Box></Box> */}
        </Box>
        <Box p="15px" flexGrow={1}>
          <Flex
            gap="15px"
            alignItems="center"
            borderBottom="1px solid"
            borderColor={useColorModeValue("gray.300", "gray.700")}
            py="15px"
          >
            <Avatar
              size="sm"
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
            <Box
              flexGrow={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Box>
                  <Flex gap="15px" alignItems="center">
                    John Smith{" "}
                    <Box
                      as="span"
                      fontSize={10}
                      color={useColorModeValue("gray.400", "gray.500")}
                    >
                      3 hr ago
                    </Box>
                  </Flex>
                </Box>
                <Box
                  fontSize={12}
                  color={useColorModeValue("gray.400", "gray.500")}
                >
                  Devloper
                </Box>
              </Box>
              <Button size="sm" rounded="3xl" variant="solid">
                Join
              </Button>
            </Box>
          </Flex>
          <Box>
            <Box height="300px" width="100%">
              <Img
                objectFit="cover"
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* CenterCard */}
    </Box>
  );
};

export default CenterCard;
