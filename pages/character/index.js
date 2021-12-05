import React from 'react'
import { Summary } from '../../components/CharacterSummary'

export default function Character() {
  // TODO: fetch all this mocked up data from the database
  const hp = {current: 15, total: 50}

  const characterConditions = [
    {icon: 'poison', color: 'green'},
    {icon: 'web'}
  ]

  const weatherConditions = [
    {icon: 'sunny', color: 'orange'},
  ]

  return (
    <Summary
      characterConditions={characterConditions}
      weatherConditions={weatherConditions}
      hp={hp}
      name={"Legolas"}
    />
  )
}
