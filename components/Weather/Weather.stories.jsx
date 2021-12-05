import React from 'react'
import {Weather} from './Weather'
import styled from '@emotion/styled'

const WeatherConditions = styled.div`
  display: flex;
`

const IconName = styled.span`
  display: flex;
  padding-right: 5px;
`

export default {
  title: "Weather",
  component: Weather
};

export const WeatherConditionsStorybook = () => {

  const conditions = [
    {icon: 'sunny', color: 'orange'},
    {icon: 'cloudy'},
    {icon: 'rainy', color: 'blue'}
  ]

  return (
    <>
      <h4>Conditions Palette:</h4>
      <WeatherConditions>
        {
          conditions.map((c, i) => (
            <section key={`climate-${i}`}>
              <IconName>{c.icon}</IconName>
              <Weather climate={c}/>
            </section>
          ))
        }
      </WeatherConditions>
    </>
  )
}
