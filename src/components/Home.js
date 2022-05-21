import React from "react"
import {ChakraProvider, Flex, Spacer, Box, Text, Center, VStack} from '@chakra-ui/react'
import {Header} from "./Header";
import {css} from "@emotion/react";
import backgroundimg from "../pic/randscape.jpg";


const styles = {
    container: css({
        width: '100%',
        backgroundImage: `url(${backgroundimg})`
    })
}

export const Home = () => {
    return (
        <ChakraProvider>
            <VStack bg="#252525" w="100vw" h="100vh">
                <Box mt={"6rem"} mx="auto">
                    <Text color="white" fontSize="6xl" mt="2">Masaki Wago</Text>
                </Box>
                <Box mx="auto">
                    <Text color="white" fontSize="3xl" mt="2">University student in Tokyo</Text>
                </Box>
                <Box mx="auto">
                    <Center>
                        <Text color="white" fontSize="3xl" mt="2">Chasing the ability to express the idea in my head using code</Text>
                    </Center>
                </Box>
                <Box mx="auto">
                    <Center>
                        <Text color="white" fontSize="3xl" mt="2">Seeking skills to change yesterday's unimaginable pleasures into tomorrow's natural pleasures.</Text>
                    </Center>
                </Box>
            </VStack>
        </ChakraProvider>
    );
}