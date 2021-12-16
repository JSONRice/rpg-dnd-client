import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {context, useRpgContext} from '../../context/providers'

export default function Inventory() {

  const router = useRouter()
  let {state: {isLoggedIn}} = useRpgContext()

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
