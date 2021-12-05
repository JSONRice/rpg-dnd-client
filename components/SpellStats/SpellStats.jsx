import React from 'react'
import styled from '@emotion/styled'
import {Divider, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import {SpellTabPanels} from './SpellTabPanels'

const Label = styled.span`
  font-weight: bold;
`

export const SpellStats = ({character}) => {

  const {spellLevels} = character

  return (
    <>
      <Tabs>
        <TabList>
          {
            spellLevels.map((spell, i) => {
              return (
                <Tab key={`tab-lv-${i}`}>
                  Lv. {i}
                </Tab>
              )
            })
          }
        </TabList>
        <SpellTabPanels spells={spellLevels}/>
      </Tabs>
    </>
  )
}
