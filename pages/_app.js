import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/Layout";
import theme from "../styles/theme";
import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp;
