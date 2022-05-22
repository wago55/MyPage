import React from "react"
import { Link } from "react-router-dom";

import {ChakraProvider, Flex, Spacer, Box, Text, Center} from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
import {RouterConfig} from "../RouterConfig";


export const Header = () => {
    return (
            <ChakraProvider>
                <Flex>
                    <Flex
                        as="header"
                        position="fixed"
                        top={0}
                        width="full"
                        shadow="sm"
                        w="100vw" h="10vh"
                        bg="#20BED3"
                        zIndex={"sticky"}
                    >
                        <Spacer></Spacer>
                        <Box m="auto" w="10vw">
                            <Center>
                                <Link to="/">
                                    <FaGithub color="white" size="3em" />
                                </Link>
                            </Center>
                        </Box>
                        <Box w="2rem">
                        </Box>
                        <Box m="auto" w="10vw">
                            <Center>
                                <Link to="works">
                                    <Text　fontSize="3xl" color="White">Works</Text>
                                </Link>
                            </Center>
                        </Box>
                        <Spacer></Spacer>
                    </Flex>
                </Flex>
            </ChakraProvider>
    );
}