import React from 'react'
import '../styles/globals.css'
import theme from '../styles/theme'
import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import {NavBar} from '../components'
import {RpgProvider} from "../context/providers"

function MyApp({Component, pageProps}) {
  return (
    <RpgProvider>
      <ChakraProvider theme={theme}>
        <CSSReset/>
        <NavBar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </RpgProvider>
  );
}

export default MyApp
