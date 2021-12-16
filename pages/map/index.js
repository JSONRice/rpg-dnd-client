import {useRouter} from 'next/router'
import * as React from "react";
import {useSelector} from 'react-redux'
import {context, useRpgContext} from "../../context/providers";
import {MapImage} from "../../components";

export default function Map() {
  const router = useRouter()

  // let {state} = useRpgContext()
  // TODO: prove
  const state = useSelector(state => state?.game)

  React.useEffect(() => {
    console.log(JSON.stringify(state))
    // console.trace()
    if (!state.isLoggedIn) {
      router.push('/', undefined, {shallow: true})
     }
  })

  return (
    <div>
      <MapImage title="The Shire"/>
    </div>
  );
}
