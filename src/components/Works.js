import React from "react"
import {ChakraProvider, Flex, SimpleGrid, Box, Image, Center} from '@chakra-ui/react'

import dail from "../pic/dail.png"
import chat from "../pic/chat.png"
import iot from "../pic/iot.png"
import mouse from "../pic/mouse.png"
import stream from "../pic/stream.png"
import server from "../pic/server.png"

export const Works = () => {
    return (
        <>
            <ChakraProvider>
                    <Flex bg="#252525" w="auto" h="auto" >
                        <SimpleGrid mt={"8rem"} mb="2rem" mx="auto" mr="1rem" ml="1rem" columns={2} spacing={10}>
                            <Box>
                                <Image w="100vw" src={dail} />
                                <Center bg="#252525" color="white" pt="0.5rem">aaaa</Center>
                            </Box>
                            <Box p="1rem">
                                <Image  w="100vw" src={chat}/>
                                <Center bg="#252525" color="white" pt="0.5rem">aaaa</Center>
                            </Box>
                            <Box  p="1rem" >
                                <Image  w="100vw" src={iot}/>
                                <Center bg="#252525" color="white" pt="0.5rem">aaaa</Center>
                            </Box>
                            <Box p="1rem" >
                                <Image  w="100vw" src={mouse}/>
                                <Center bg="#252525" color="white" pt="0.5rem">aaaa</Center>
                            </Box>
                            <Box p="1rem" >
                                <Image  w="100vw" src={dail}/>
                                <Center bg="#252525" color="white" pt="0.5rem">aaaa</Center>
                            </Box>
                            <Box p="1rem" >
                                <Image src={stream}/>
                                <Center bg="#252525" color="white" pt="0.5rem">aaaa</Center>
                            </Box>
                            <Box  >
                                <Image  w="100vw" src={server}/>
                                <Center bg="#252525" color="white" pt="0.5rem">aaaa</Center>
                            </Box>
                        </SimpleGrid>
                    </Flex>
            </ChakraProvider>
        </>
    );
}