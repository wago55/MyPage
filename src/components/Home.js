import React from "react"
import {
    ChakraProvider,
    Flex,
    Spacer,
    Box,
    Text,
    Center,
    VStack,
    Image,
    Container,
    Button,
    IconButton
} from '@chakra-ui/react'
import {Header} from "./Header";
import {css} from "@emotion/react";
import profile from "../pic/profile.jpg"
// import backgroundimg from "../pic/randscape.jpg";
import { SiQiita } from 'react-icons/si';
import { FaGithub, FaTwitter } from "react-icons/fa";

// const styles = {
//     container: css({
//         width: '100%',
//         backgroundImage: `url(${backgroundimg})`
//     })
// }

export const Home = () => {
    return (
        <ChakraProvider>
            {/*<Spacer/>*/}
            <VStack bg="#252525" w="100vw" h="100vh">
                <Container maxW='2xl' centerConatent>
                    <Container centerConatent>
                        <Center>
                            <Box mt={"10rem"} mx="auto">
                                <Flex>
                                    <Text color="white" fontSize="6xl" mt="2rem">Wago</Text>
                                    <Image boxSize="100px" borderRadius='full' m="2rem" src={profile}></Image>
                                </Flex>
                            </Box>
                        </Center>
                    </Container>
                    <Box mx="auto">
                        <Text color="white" fontSize="3xl" mt="1">University student in Tokyo.</Text>
                    </Box>
                    <Box mx="auto">
                        <Text color="white" fontSize="3xl" mt="2">Chasing the ability to express the idea in my head using code!</Text>
                    </Box>
                    <Box mx="auto">
                        <Text color="white" fontSize="3xl" mt="2">Seeking skills to change yesterday's unimaginable pleasures into tomorrow's natural pleasures!</Text>
                    </Box>
                    <Container>
                        <Center>
                            <Box>
                                <Flex>
                                    <Button m="2rem" variant="link" as="a" href="https://github.com/wago55">

                                        <FaGithub color="white" size="3em" />

                                    </Button>

                                    <Box m="2rem">
                                        <Button as="a" variant="link" href="https://twitter.com/wamu_wm">
                                            <FaTwitter color="White" size="3em" />
                                        </Button>

                                    </Box>

                                    <Box m="2rem">
                                        <Button variant="link" as="a" href="https://qiita.com/wago55">
                                            <SiQiita color="white" size="3em" />
                                        </Button>
                                    </Box>

                                </Flex>
                            </Box>
                        </Center>
                    </Container>
                </Container>
            </VStack>

            {/*<Spacer/>*/}
        </ChakraProvider>
    );
}