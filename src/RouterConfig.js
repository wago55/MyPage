import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { css } from '@emotion/react'
import {ChakraProvider, Flex, Spacer, Box, Text, Center} from '@chakra-ui/react'
// import backgroundimg from "./pic/randscape.jpg"

import { Home } from "./components/Home"
import { Works } from "./components/Works"
import {Header} from "./components/Header";

export const RouterConfig = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="works" element={<Works />} />
            </Routes>
        </BrowserRouter>
    );
}