import React from 'react'
import {Box} from "@chakra-ui/react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react"
import styled from '@emotion/styled'

const Title = styled.div`
  width: 350px !important;
`

export const DndAccordion = ({title, children}) => (
  <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton
          _hover={{bg: "#C3C3C3", color: "white"}}
          _expanded={{bg: "grey", color: "white"}}
        >
          <Box flex="1" textAlign="left">
            <Title>{title}</Title>
          </Box>
          <AccordionIcon/>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={8}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)
