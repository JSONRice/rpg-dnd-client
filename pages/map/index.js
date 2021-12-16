import {useRouter, userRouter} from 'next/router'
import React, {useContext} from "react";
import {context} from "../../context/providers";
import {MapImage} from "../../components";

export default function Map() {
  const router = useRouter()
  let {state} = React.useContext(context);

  React.useEffect(() => {
    debugger;
    console.log(JSON.stringify(state))
    if (!state.isLoggedIn) {
      router.push('/', undefined, {shallow: true}).then(r =>{
        debugger
        console.log(r)
      })
     }
  })

  return (
    <div>
      <MapImage title="The Shire"/>
    </div>
  );
}
