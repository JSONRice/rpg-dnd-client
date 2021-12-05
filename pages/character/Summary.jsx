import React from 'react'
import {Name} from '../../components/Name'
import {Health} from '../../components/Health'
import {Conditions} from '../../components/Conditions'
import {Weather} from '../../components/Weather'
import styled from '@emotion/styled'
import {WorldDateTime} from '../../components/WorldDateTime'

const WeatherConditions = styled.div`
  display: flex;
`

const IconName = styled.span`
  display: flex;
  padding-right: 5px;
`

const Row = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.colors.characterSummaryBkgnd};
  padding: 15px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
`

export const Summary = ({name, hp, characterConditions, weatherConditions}) => {
  return (
    <Row>
      <Name>
        {name}
      </Name>
      <Health hp={hp}/>
      <Conditions conditions={characterConditions}/>
      <WorldDateTime/>
      <WeatherConditions>
        {
          weatherConditions.map((c, i) => (
            <section key={`climate-${i}`}>
              <Weather climate={c}/>
            </section>
          ))
        }
      </WeatherConditions>
    </Row>
  )
}
