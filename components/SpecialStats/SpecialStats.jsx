import React from 'react'
import styled from '@emotion/styled'
import {characterUtils} from '../../utils'
import {
  Divider
} from "@chakra-ui/react"

const Label = styled.span`
  font-weight: bold;
`

export const SpecialStats = ({character}) => (
  <div>
    {
      character?.specials?.map(({name, description}, i) => (
        <div key={`special-${i}`}>
          <div>
            <Label>{name}</Label>
            <p>{description}</p>
          </div>
          <Divider/>
          <br/>
        </div>
      ))
    }
  </div>
)
