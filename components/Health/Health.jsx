import React from 'react'
import { Icon } from "@chakra-ui/react"
import styled from '@emotion/styled'

const HP = styled.span`
 font-size: 12px; 
`

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

export const Health = ({hp}) => {
  const {current, total} = hp

  const color = () => {
    const midpoint = total / 2
    return (current >= midpoint) ? "green" : "red"
  }

  return (
    <div>
      <CircleIcon boxSize={6} color={color()} />
      <HP>HP: {current}/{total}</HP>
    </div>
  )
}
