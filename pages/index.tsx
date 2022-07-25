import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import CenterCard from "@components/CenterCard";
import Copyright from "@components/Copyright";
import LeftBottom from "@components/LeftBottom";
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
          <Box flex="3 0 300px">
            <LeftCard />
            <LeftBottom />
          </Box>
          <Box flex="1 0 600px" maxW={600}>
            <Box width="100%">
              <TopCard />
            </Box>
            <Box>
              <CenterCard />
            </Box>
          </Box>
          <Box flex="3 0 300px">
            <RightCard />
            <RightBottomCard />
            <Copyright />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
