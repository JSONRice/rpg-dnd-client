import {Icon} from '@chakra-ui/react'
import React from 'react'
import {
  IoPartlySunnyOutline,
  IoRainyOutline,
  IoSunnyOutline
} from 'react-icons/io5'

export const Weather = ({climate}) => {
  const {icon, color} = climate
  const size = {w: 8, h: 8}
  let as;

  switch (icon) {
    case 'sunny':
      as = IoSunnyOutline
      break
    case 'rainy':
      as = IoRainyOutline
      break
    case 'cloudy':
      as = IoPartlySunnyOutline
      break
  }

  return <Icon {...size} color={color} as={as}/>
}
