import * as React from 'react'
import '../styles/globals.css'
import theme from '../styles/theme'
import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import {NavBar} from '../components'
import {reducer, initialState, Provider} from "../context/providers"

const RpgProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  console.log('RpgProvider state: ', JSON.stringify(state))


  console.log('RpgProvider')

  return (
    <Provider value={{state, dispatch}}>
      {children}
    </Provider>
  )
}

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
