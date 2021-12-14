import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {context} from '../../context/providers'

export default function Inventory() {

  const router = useRouter()
  let {state: {isLoggedIn}} = React.useContext(context);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/', undefined, { shallow: true })
    }
  })

  return (
    <div>
      <h1>INVENTORY PAGE</h1>
    </div>
  )
}
