import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import Layout from "@components/Layout";
import getStore from "redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const store = getStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
