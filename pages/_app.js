import React from 'react'
import '../styles/globals.css'
import theme from '../styles/theme'
import {ChakraProvider} from '@chakra-ui/react'
import {NavBar} from '../components/NavBar'
import {RpgProvider} from "../context/providers"

function MyApp({Component, pageProps}) {
  return (
    <RpgProvider>
      <ChakraProvider theme={theme}>
        <NavBar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </RpgProvider>
  );
}

export default MyApp
