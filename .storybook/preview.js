import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const ThemeDecorator = (Story) => {

  return (
    <ChakraProvider theme={theme}>
      <Story/>
    </ChakraProvider>
  )
}

export const decorators = [ThemeDecorator]
