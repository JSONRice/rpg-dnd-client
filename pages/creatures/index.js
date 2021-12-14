import {Divider} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import React from 'react'
import {CharacterStats} from '../../components/CharacterStats'
import { Summary } from '../../components/CharacterSummary'
import {DndAccordion} from '../../components/DndAccordion'
import {SkillStats} from '../../components/SkillStats'
import {SpecialStats} from '../../components/SpecialStats'
import {SpellStats} from '../../components/SpellStats'
import {context} from '../../context/providers'
import {characterUtils} from '../../utils'

const Title = ({children}) => (
  <div>
    <h5>{children}</h5>
  </div>
)

export default function Character() {
  const router = useRouter()
  let {state: {monsters, isLoggedIn}} = React.useContext(context);

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/', undefined, { shallow: true })
    }
  })

  return (
      <Title>Creatures</Title>
  )
}
