import React, {useEffect, useState} from 'react'

export default function Inventory() {

  // componentDidMount, componentWillUnmount, componentDidUpdate
  useEffect(() => {
    console.log("The name is ", name);
  })

  const [name, setName] = useState("Jason")

  return (
    <div>
      <input type="text" onClick={e => setName(e.target.value)}/>
      <h1>INVENTORY PAGE</h1>
    </div>
  )
}
