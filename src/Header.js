import React from "react"
import {ChakraProvider, Flex, Spacer, Box, Text, Center} from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";


export const Header = () => {
    return (
        <ChakraProvider>
            <Flex bg="#edf2f7" w="100vw" h="100vh">
                <Flex
                    as="header"
                    position="fixed"
                    top={0}
                    width="full"
                    shadow="sm"
                    w="100vw" h="10vh"
                    bg="#20BED3"
                >
                    <Spacer></Spacer>
                    <Box m="auto" w="10vw">
                        <Center>
                            <FaGithub color="white" size="3em" />
                        </Center>
                    </Box>
                    <Box m="auto" w="10vw">
                        <Center>
                            <Text　fontSize="3xl" color="White">Works</Text>
                        </Center>
                    </Box>
                    <Spacer></Spacer>
                </Flex>
            </Flex>
        </ChakraProvider>

    )
}