import {useRouter, userRouter} from 'next/router'
import React, {useContext} from "react";
import {context} from "../../context/providers";
import {MapImage} from "../../components";

export default function Map() {
  const router = useRouter()
  let {state: {isLoggedIn}} = React.useContext(context);

  React.useLayoutEffect(() => {
    if (!isLoggedIn) {
      router.push('/', undefined, { shallow: true })
    }
  })

  return (
    <div>
      <MapImage title="The Shire"/>
    </div>
  );
}
