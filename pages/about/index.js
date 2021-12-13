import {useRouter} from 'next/router'
import React from 'react'
import styled from '@emotion/styled'
import {context} from '../../context/providers'

const InnerDiv = styled.div`
  width: 600px;
`

export default function About() {
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
      <InnerDiv>About</InnerDiv>
    </div>
  )
}
