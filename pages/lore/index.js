import {useRouter} from 'next/router'
import React from 'react'
import {SkillTable} from '../../components'
import {context} from '../../context/providers'

export default function Lore() {
  const router = useRouter()
  let {state: {isLoggedIn}} = React.useContext(context);

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
    }
  })

  if (!isLoggedIn) return null;

  return (
    <div>
      <h1>LORE PAGE</h1>
      <SkillTable/>
    </div>
  )
}
