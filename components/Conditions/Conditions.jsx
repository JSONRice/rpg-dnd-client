import React from 'react'
import {ConditionIcon} from './ConditionIcon'

export const Conditions = ({conditions}) => {
  return (
    <>
      {
        conditions?.map((condition, i) => <ConditionIcon key={`condition-${i}`} condition={condition}/>)
      }
    </>
  )
}
