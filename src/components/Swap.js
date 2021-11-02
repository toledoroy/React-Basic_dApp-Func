import React from "react";
import {
  Image,
  Center,
  Button,
  Divider,
  Box,
  Spacer,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  HStack
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { useMediaQuery } from "@chakra-ui/react";

function Hello() {
  alert("Hello");
}

function Swap() {
  const { activateBrowserWallet, account } = useEthers();
  const BNBBalance = useEtherBalance(account);
  const MartianBalance = useEtherBalance(account);
  const [isTablet] = useMediaQuery("(min-width: 750px)");
  const [isMobile] = useMediaQuery("(min-width: 320px)");

  function handleConnectWallet() {
    BNBBalance ? Hello() : activateBrowserWallet();
  }

  return (
    <Flex
      margin="auto"
      paddingTop={isMobile ? "10vh" : isTablet ? "12vh" : "15vh"}
      width="100%"
      minWidth="500px"
    >
      <Box
        w="450px"
        borderRadius="35px"
        m="auto"
        backgroundColor="teal.600"
        boxShadow="2xl"
        p="25px"
      >
        <Flex>
          <Box color="white" fontSize="18px">
            Swap
          </Box>
          <Spacer />
          <Box>
            <SettingsIcon boxSize={5} color="twitter.500" />
          </Box>
        </Flex>
        <Flex height="5">
          <Divider orientation="horizontal" pt="5px"></Divider>
        </Flex>
        <Box
          id="BNB Field"
          p="5"
          height="100px"
          backgroundColor="white"
          borderRadius="25"
        >
          <Flex>
            <Box>From</Box>
            <Spacer />
            <Box>
              {BNBBalance && (
                <Text paddingRight="0">
                  {parseFloat(formatEther(BNBBalance)).toFixed(10)}
                </Text>
              )}
              {!BNBBalance && <Text>-</Text>}
            </Box>
          </Flex>
          <Flex>
            <InputGroup>
              <NumberInput w="91%" focusBorderColor="none">
                <NumberInputField
                  id="BNBField"
                  p="0"
                  border="0"
                  placeholder="0.0"
                />
                <InputRightElement
                  children={
                    <HStack>
                      <Button
                        backgroundColor="transparent"
                        _hover={{
                          backgroundColor: "transparent",
                          border: "0"
                        }}
                        _active={{
                          backgroundColor: "transparent",
                          border: "0"
                        }}
                      >
                        Max
                      </Button>
                      <Image
                        src="https://www.logo.wine/a/logo/Binance/Binance-BNB-Icon-Logo.wine.svg"
                        boxSize="50px"
                        objectFit="cover"
                        display="inline"
                      ></Image>
                    </HStack>
                  }
                />
              </NumberInput>
            </InputGroup>
          </Flex>
        </Box>

        <Flex height="2"></Flex>
        <Box
          id="Martian Field"
          p="5"
          height="100px"
          backgroundColor="white"
          borderRadius="25"
        >
          <Flex>
            <Box>To</Box>
            <Spacer />
            <Box>
              {MartianBalance && (
                <Text paddingRight="0">
                  {parseFloat(formatEther(MartianBalance)).toFixed(10)}
                </Text>
              )}
              {!MartianBalance && <Text>-</Text>}
            </Box>
          </Flex>
          <Flex>
            <InputGroup>
              <NumberInput w="100%" focusBorderColor="none">
                <NumberInputField
                  id="MartianField"
                  p="0"
                  placeholder="0.0"
                  border="0"
                />
                <InputRightElement
                  children={
                    <Image
                      src="https://static.wixstatic.com/media/0c38a4_45b23060142548d4bf77407c6fde0aad~mv2.png"
                      marginLeft="2.5"
                      boxSize="35px"
                      objectFit="cover"
                    ></Image>
                  }
                />
              </NumberInput>
            </InputGroup>
          </Flex>
        </Box>
        <Flex height="2"></Flex>
        <Center>
          <Button
            focusBorderColor="none"
            id="swap_button"
            border="0"
            w="95%"
            h="60px"
            borderRadius="25"
            backgroundColor="#F58634"
            onClick={handleConnectWallet}
          >
            {!BNBBalance && <Text>Please connect wallet</Text>}
            {BNBBalance && <Text>Swap</Text>}
          </Button>
        </Center>
      </Box>
    </Flex>
  );
}

export default Swap;
