import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import CenterCard from "@components/CenterCard";
import LeftCard from "@components/LeftCard";
import RightBottomCard from "@components/RightBottomCard";
import RightCard from "@components/RightCard";
import TopCard from "@components/TopCard";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const hello = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const tat = e.target.value;
  //   toggleColorMode();
  // };
  return (
    <Box padding={15}>
      <Container>
        <Flex gap="15px" grow={1}>
          <Box flex="1 3 100%">
            <LeftCard />
          </Box>
          <Box flex="1 2 100%">
            <Box>
              <TopCard />
            </Box>
            <Box>
              <CenterCard />
            </Box>
          </Box>
          <Box flex="1 3 100%">
            <RightCard />
            <RightBottomCard />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
