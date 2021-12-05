import styled from '@emotion/styled'
import React from 'react'

const Label = styled.span`
  font-weight: bold;
`

const SmallLabel = styled(Label)`
  font-size: 14px;
`

export const SkillStats = ({skills}) => (
  <div>
    {
      skills.map(({name, stat, passive, description}, i) => (
        <div key={`skill-${i}`}>
          <div>
            <Label>{name}</Label>
            <br/>
            <div>
              <SmallLabel>Stat: </SmallLabel>{stat}
            </div>
            <div>
              <SmallLabel>Passive: </SmallLabel>{passive}
            </div>
            <p>{description}</p>
          </div>
          <br/>
        </div>
      ))
    }
  </div>
)
