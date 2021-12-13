import {useRouter, userRouter} from 'next/router'
import React, {useContext} from "react";
import {context} from "../../context/providers";
import {MapImage} from "../../components";

export default function Map() {
  const router = useRouter()
  let {state: {isLoggedIn, totalSkills}} = React.useContext(context);

  React.useLayoutEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
    }
  })

  if (!isLoggedIn) return null;

  return (
    <div>
      <h1>MAP PAGE</h1>
      <p>I see {totalSkills} Skills!</p>
      <MapImage title="The Shire"/>
    </div>
  );
}
