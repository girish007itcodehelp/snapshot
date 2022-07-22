import { Box, Switch, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hello = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tat = e.target.value;
    toggleColorMode();
  };
  return (
    <Box padding={15}>
      <Switch
        isChecked={colorMode === "dark"}
        id="email-alerts"
        size="lg"
        onChange={hello}
      />
    </Box>
  );
};

export default Home;
