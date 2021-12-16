import {useRouter} from 'next/router'
import React from 'react'
import styled from '@emotion/styled'
import {useSelector} from 'react-redux'
import {context, useRpgContext} from '../../context/providers'

const InnerDiv = styled.div`
  width: 600px;
`

export default function About() {
  const router = useRouter()
  // let {state} = useRpgContext()
  // TODO: prove
  const state = useSelector(state => state?.game)

  React.useEffect(() => {
    if (!state.isLoggedIn) {
      router.push('/', undefined, { shallow: true })
    }
  })

  return (
    <div>
      <InnerDiv>About</InnerDiv>
    </div>
  )
}
