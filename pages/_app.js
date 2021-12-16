import * as React from 'react'
import '../styles/globals.css'
import {initializeStore} from '../redux/initRedux'
import theme from '../styles/theme'
import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import {NavBar} from '../components'
import {reducer, initialState} from "../context/providers"
import {Provider} from "react-redux"

const RpgProvider = ({children}) => {
  return (
    <Provider store={initializeStore()}>
      {children}
    </Provider>
  )
}

// <RpgProvider>
//   <ChakraProvider theme={theme}>
//     <CSSReset/>
//     <NavBar/>
//     <Component {...pageProps} />
//   </ChakraProvider>
// </RpgProvider>

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
