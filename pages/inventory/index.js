import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {context, useRpgContext} from '../../context/providers'

export default function Inventory() {

  const router = useRouter()
  // let {state: {isLoggedIn}} = useRpgContext()
  // TODO: prove
  const { isLoggedIn } = useSelector(state => state?.game)

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
