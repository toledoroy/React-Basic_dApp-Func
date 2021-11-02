import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Swap from "./components/Swap";
import Header from "./components/Header";
import { DAppProvider } from "@usedapp/core";
import { Global, css } from "@emotion/react";
import theme from "./theme";
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;
//apply the GlobalStyles to your app:

const App = () => (
  <DAppProvider config={{}}>
    <ChakraProvider resetCSS>
      <Global styles={GlobalStyles} />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header />
      <Swap />
    </ChakraProvider>
  </DAppProvider>
);

export default App;
