import React from "react"
import {ChakraProvider, Flex, SimpleGrid, Box, Image, Center, Spacer, useBreakpointValue} from '@chakra-ui/react'

import dail from "../pic/dail_re.png"
import chat from "../pic/chat_re.png"
import iot from "../pic/iot_re.png"
import mouse from "../pic/mouse_re.png"
import stream from "../pic/stream_re.png"
import server from "../pic/server_re.png"

export const Works = () => {
    // const columns = useBreakpointValue({base:1, sm:1, md:2})

    return (
        <>
            <ChakraProvider>
                    <Flex bg="#252525">

                        <SimpleGrid mt={"8rem"} mb="2rem" mx="auto" mr="1rem" ml="1rem" columns={{base:1, lg: 2}} spacing={4}>

                            <Box mb="2rem">
                                <Box p="1rem" as="Button" w="100%" h="100%">
                                    <Image m="auto" borderRadius='lg' w="95%" h="95%" transition="0.3s" _hover={{transform:"scale(1.05,1.05)", transition: "0.3s "}} src={dail} />
                                </Box>
                                <Center color={"white"} pt="0.5rem" >写真共有アプリ "Dail"</Center>
                            </Box>

                            <Box mb="2rem" >
                                <Box p="1rem" as="Button" w="100%" h="100%">
                                    <Image  w="95%" h="95%" m="auto" borderRadius='lg' transition="0.3s" _hover={{transform:"scale(1.05,1.05)", transition: "0.3s "}} src={chat}/>
                                </Box>
                                <Center color="white" pt="0.5rem">会員登録式チャットシステム</Center>
                            </Box>

                            <Box mb="2rem">
                                <Box  p="1rem" as="Button" w="100%" h="100%">
                                    <Image  w="95%" h="95%" m="auto" borderRadius='lg' transition="0.3s" _hover={{transform:"scale(1.05,1.05)", transition: "0.3s "}} src={iot}/>
                                </Box>
                                <Center color="white" pt="0.5rem">IoT 家のエアコンを外からつけて快適に</Center>
                            </Box>

                            <Box mb="2rem">
                                <Box p="1rem" as="Button" w="100%" h="100%">
                                    <Image  w="95%" h="95%" m="auto" borderRadius='lg' transition="0.3s" _hover={{transform:"scale(1.05,1.05)", transition: "0.3s "}} src={mouse}/>
                                </Box>
                                <Center color="white" pt="0.5rem">自律走行ロボットの走行</Center>
                            </Box>

                            <Box mb="2rem">
                                <Box p="1rem" as="Button" w="100%" h="100%">
                                    <Image w="95%" h="95%" m="auto" borderRadius='lg' transition="0.3s" _hover={{transform:"scale(1.05,1.05)", transition: "0.3s "}} src={stream}/>
                                </Box>
                                <Center color="white" pt="0.5rem">Djangoで動画ストリーミング</Center>
                            </Box>

                            <Box mb="2rem">
                                <Box p="1rem" as="Button" w="100%" h="100%">
                                    <Image w="95%" h="95%" m="auto" borderRadius='lg' transition="0.3s" _hover={{transform:"scale(1.05,1.05)", transition: "0.3s "}} src={server}/>
                                </Box>
                                <Center color="white" pt="0.5rem">Cで簡易Webサーバを作る(複数同時接続可)</Center>
                            </Box>
                            <Spacer></Spacer>
                        </SimpleGrid>
                    </Flex>
            </ChakraProvider>
        </>
    );
}