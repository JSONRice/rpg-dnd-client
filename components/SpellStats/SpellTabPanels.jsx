import {useDisclosure} from '@chakra-ui/hooks'
import React from 'react'
import {
  Button,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  TabPanel,
  TabPanels
} from "@chakra-ui/react"
import styled from '@emotion/styled'

const Label = styled.span`
  font-weight: bold;
`

export const SpellTabPanels = ({spells}, i) => {

  return (
    <TabPanels>
      {
        spells?.map((spellArray, i) => {
          return (
            <TabPanel key={`tab-panel-${i}`}>
              <div>
                {
                  spellArray
                    .filter(({level}, j) => level === i)
                    .map(({name, type, range, description}, i) => (
                      <div key={`spell-${i}`}>
                        <div>
                          <Label>{name}</Label>
                          <div>Type: {type}</div>
                          <div>Range: {range}</div>
                          {/*TODO: finish the next two lines of work:*/}
                          {/*<Button onClick={onOpen}>Spell Details</Button>*/}
                          {/*<SpellDescriptionModal description={description} name={name}/>*/}
                        </div>
                        <Divider/>
                        <br/>
                      </div>
                    ))
                }
              </div>
            </TabPanel>
          )
        })
      }
    </TabPanels>
  )
}
