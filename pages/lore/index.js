import {useRouter} from 'next/router'
import * as React from 'react'
import {useSelector} from 'react-redux'
import {SkillTable} from '../../components'
import {useRpgContext} from '../../context/providers'

export default function Lore() {
  const router = useRouter()
  // let {state} = useRpgContext()
  // TODO: prove
  const { isLoggedIn } = useSelector(state => state?.game)
  // const { isLoggedIn } = state

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/', undefined, { shallow: true })
    }
  })

  return (
    <div>
      <h1>LORE PAGE</h1>
      <SkillTable/>
    </div>
  )
}
