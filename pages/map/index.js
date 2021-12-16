import {useRouter, userRouter} from 'next/router'
import React, {useContext} from "react";
import {context} from "../../context/providers";
import {MapImage} from "../../components";

export default function Map() {
  const router = useRouter()
  let {state: {isLoggedIn}} = React.useContext(context);

  React.useEffect(() => {
    debugger;
    if (!isLoggedIn) {
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
