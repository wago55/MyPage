import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ChakraProvider, Flex, Spacer, Box, Text, Center} from '@chakra-ui/react'

import {RouterConfig} from "./RouterConfig";
import { Home } from "./components/Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterConfig/>
    </React.StrictMode>
);
