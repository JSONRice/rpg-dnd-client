import React from 'react'
import styled from '@emotion/styled'
import {characterUtils} from '../../utils'
import {
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Tooltip
} from "@chakra-ui/react"

const CenteredSpan = styled.span`
  display: flex;
  justify-content: center;
`

const StyledCaption = styled.span`
  font-size: 14px;
`

const Label = styled.span`
  font-weight: bold;
`

export const CharacterStats = ({character}) => {
  const {armorClass, hp, speed, abilities} = character

  return (
    <div>
      <div>
        <Label>Armor Class: </Label> {armorClass}
      </div>
      <div>
        <Label>Hit Points: </Label> {hp}
      </div>
      <div>
        <Label>Speed: </Label> {speed}
      </div>
      <Divider/>
      <div>
        <Table variant="simple" size={"sm"}>
          <TableCaption placement="top">
            <StyledCaption>Character Attributes</StyledCaption>
          </TableCaption>
          <Thead>
            <Tr>
              {
                abilities.map(({name}, i) => (
                  <Th key={`ability-th-${i}`}>
                    <Tooltip
                      key={`ability-tip-${i}`}
                      label={name}
                      placement="top"
                    >
                      <CenteredSpan>{name.slice(0, 3)}</CenteredSpan>
                    </Tooltip>
                  </Th>
                ))
              }
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {
                abilities.map(({stat}, i) => (
                  <Td key={`ability-td-${i}`} isNumeric>
                    <CenteredSpan>{stat}</CenteredSpan>
                  </Td>
                ))
              }
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  )
}
