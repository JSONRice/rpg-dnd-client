import React from 'react'
import {Conditions} from './Conditions'

export default {
  title: "Conditions",
  component: Conditions
};

export const ConditionsStorybook = () => {

  const conditions = [
    {icon: 'poison', color: 'green'},
    {icon: 'web'},
    {icon: 'shield'}
  ]

  return (
    <>
      <h4>Conditions Palette:</h4>
      <Conditions conditions={conditions}/>
    </>
  )
}
