import { Box } from "@chakra-ui/react";
import NavigationBar from "./NavigationBar";
import { Router, useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const onLogin = router.route === "/login";
  return (
    <Box>
      <Box
        marginLeft={!onLogin && { sm: "0", md: "0", lg: "250px", xl: "250xp" }}
      >
        {children}
      </Box>
      {!onLogin && (
        <Box
          bottom={{ sm: "0", md: "0" }}
          width={{ lg: "250px", xl: "250px" }}
          top={{ lg: "0", xl: "0" }}
          left={{ lg: "0", xl: "0" }}
          position={{
            sm: "fixed",
            md: "fixed",
            lg: "absolute",
            xl: "absolute",
          }}
        >
          <NavigationBar />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
