import {Icon} from '@chakra-ui/react'
import React from 'react'
import {GiPoisonGas, GiSpiderWeb, GiCheckedShield} from 'react-icons/gi'

export const ConditionIcon = ({condition}) => {
  const {icon, color} = condition
  const size = {w: 8, h: 8}
  let as;

  switch (icon) {
    case 'poison':
      as = GiPoisonGas
      break
    case 'web':
      as = GiSpiderWeb
      break
    case 'shield':
      as = GiCheckedShield
      break
  }

  return <Icon {...size} color={color} as={as}/>
}
