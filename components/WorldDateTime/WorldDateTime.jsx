import React from 'react'
import styled from '@emotion/styled'

const Unit = styled.span`
  display: flex-inline;
  padding: 0 5px;
  align-items: center;
  justify-content: center;
`

export const WorldDateTime = ({worldDate = 'YR 1234 3rd'}) => {

  const today = new Date()
  const time = { timeStyle: "short"}
  const weekday = { weekday: "long"}

  const getDateTime = (options) => {
    return new Intl.DateTimeFormat('en-US', options).format(today)
  }

  return (
    <span>
      <Unit>{getDateTime(time)}</Unit>
      <Unit>{getDateTime(weekday)}</Unit>
      <Unit>{worldDate}</Unit>
    </span>
  )
}
