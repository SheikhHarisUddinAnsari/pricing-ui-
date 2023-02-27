"use client";
import React from "react";
import { Box, Center, ChakraProvider } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import Icon1 from "./Icon1";
import Icon2 from "./Icon2";
import Icon3 from "./Icon3";
export default function Features() {
  return (
    <>
      <ChakraProvider>
        <Center>
          <Box mx={{ md: "160px", base: "5px" }} my={"25px"}>
            <Flex direction={{ base: "column", md: "row" }}>
              <Box padding={{ md: "10px", base: "5px" }} my={"3px"}>
                <HStack>
                  <Icon1 /> <Text>30 days money back Guarantee</Text>
                </HStack>
              </Box>
              <Box padding={{ md: "10px", base: "5px" }} my={"3px"}>
                <HStack>
                  <Icon2 /> <Text>No setup fees 100% hassle-free</Text>
                </HStack>
              </Box>
              <Box padding={{ md: "10px", base: "5px" }} my={"3px"}>
                <HStack>
                  <Icon3 />{" "}
                  <Text>No monthly subscription Pay once and for all</Text>
                </HStack>
              </Box>
            </Flex>
          </Box>
        </Center>
      </ChakraProvider>
    </>
  );
}
