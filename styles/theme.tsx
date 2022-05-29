import { createBreakpoints } from "@chakra-ui/theme-tools";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const theme = extendTheme({
  breakpoints,
  colors: {
    white: "#FFFFFF",
    black: "#151515",
  },
  styles: {
    global: {
      "html, body": {
        boxSizing: "border-box",
      },
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
