"use client";
import React from "react";
import { chakra } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <ChakraProvider>
        <Box
          bg={"#6B46C1"}
          color={"white"}
          textAlign={{ md: "center", base: "left" }}
          height={"20rem"}
          pl={"1.5rem"}
          pt={{ base: "6.5%", md: "4rem" }}
        >
          <Heading fontSize={"4xl"} pb={"0.5rem"}>
            Simple Pricing for your business
          </Heading>
          <Text>plans that are carefully crafted to suit your business</Text>
        </Box>
      </ChakraProvider>
    </>
  );
}
