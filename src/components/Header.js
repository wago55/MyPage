import React from "react"
import { Link } from "react-router-dom";

import {ChakraProvider, Flex, Spacer, Box, Text, Center, SimpleGrid} from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {RouterConfig} from "../RouterConfig";


export const Header = () => {
    return (
            <ChakraProvider>
                {/*<Flex>*/}
                    <Flex
                        as="header"
                        position="fixed"
                        top={0}
                        width="full"
                        shadow="sm"
                        w="100vw"
                        h="6rem"
                        bg="#20BED3"
                        zIndex={"sticky"}
                        justifyContent="center"
                    >
                        {/*<Spacer></Spacer>*/}
                        {/*<Box>*/}
                        <Center>
                            <Flex >
                                <Link to="/">
                                    <AiFillHome color="white" size="2.5em"/>
                                </Link>
                                <Box m="0.5em"></Box>
                                <Link to="works">
                                    <Text　fontSize="2em" color="White">Works</Text>
                                </Link>
                            </Flex>
                        </Center>

                        {/*</Box>*/}
                        {/*<Spacer></Spacer>*/}
                    </Flex>
                {/*</Flex>*/}
            </ChakraProvider>
    );
}