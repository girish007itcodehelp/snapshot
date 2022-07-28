import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import Center from "@components/Center";
import Copyright from "@components/Copyright";
import LeftBottom from "@components/LeftBottom";
import LeftCard from "@components/LeftCard";
import RightBottomCard from "@components/RightBottomCard";
import RightCard from "@components/RightCard";
import TopCard from "@components/TopCard";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { authState, loginUser } from "redux/slices/authSlice";
import getStore from "redux/store";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useSelector(authState);
  console.log("dis", user);
  // const hello = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const tat = e.target.value;
  //   toggleColorMode();
  useEffect(() => {
    console.log(user);
  }, [user]);

  // };
  return (
    <Box padding={15}>
      <Container>
        <Flex gap="15px" grow={1}>
          <Box flex="3 0 300px">
            <Box position="sticky" top="90px">
              <LeftCard />
              <LeftBottom />
            </Box>
          </Box>
          <Box flex="1 0 600px" maxW={600}>
            <Box width="100%">
              <TopCard />
            </Box>
            <Box>
              <Center />
            </Box>
          </Box>
          <Box flex="3 0 300px">
            <Box position="sticky" top="90px">
              <RightCard />
              <RightBottomCard />
              <Copyright />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const store = getStore();
  await store.dispatch(loginUser());
  return {
    props: {
      initialState: JSON.parse(JSON.stringify(store.getState())),
    },
  };
};
