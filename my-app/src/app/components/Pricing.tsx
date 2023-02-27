"use client";
import React from "react";
import { Center, ChakraProvider, Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import CheckIcon from "@/app/components/CheckIcon";

export default function Pricing() {
  return (
    <>
      <ChakraProvider>
        <Center>
          <Box
            mx={{ md: "8px", base: "4px" }}
            textAlign={"center"}
            borderRadius={"6px"}
            overflow="hidden"
            shadow={"lg"}
            mt={{ base: "-90px" }}
          >
            <Flex direction={{ base: "column", md: "row" }}>
              {/* left Container */}
              <Box
                bg={"#E5E5E5"}
                maxWidth={"1000px"}
                py={"26px"}
                px={{ base: "4px", md: "60px" }}
              >
                <Text fontWeight={"bold"}>Premium PRO</Text>
                <Heading fontWeight={"bold"}>$329</Heading>
                <Text>billed just once</Text>
                <Button
                  bg={"#805AD5"}
                  mt={"1rem"}
                  color={"white"}
                  maxWidth={"13.5rem"}
                >
                  Get Started
                </Button>
              </Box>

              {/* Right Container */}
              <Box
                textAlign={"left"}
                bg={"white"}
                px={{ md: "10px", base: "7px" }}
                py={"26px"}
                maxWidth={"500px"}
                mx={"auto"}
              >
                <Box p={{ md: "5px", base: "0px" }}>
                  <Text>
                    Access these features when you get this pricing package for
                    your bussiness
                  </Text>
                </Box>
                <Box pt={"10px"} pl={"1px"}>
                  <HStack>
                    <CheckIcon />
                    <Text>International calling and messaging API</Text>
                  </HStack>
                </Box>
                <Box p={"1px"}>
                  <HStack>
                    <CheckIcon />
                    <Text>Additional phone numbers</Text>
                  </HStack>
                </Box>
                <Box p={"1px"}>
                  <HStack>
                    <CheckIcon />
                    <Text>Automated messages via Zapier</Text>
                  </HStack>
                </Box>
                <Box p={"1px"}>
                  <HStack>
                    <CheckIcon />
                    <Text>24/7 support and consulting</Text>
                  </HStack>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Center>
      </ChakraProvider>
    </>
  );
}
