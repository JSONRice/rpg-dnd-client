import React, {useContext} from "react";
import {context} from "../../context/providers";
import {MapImage} from "../../components";

export default function Map() {
  const {state} = useContext(context);
  const {totalSkills} = state;

  return (
    <div>
      <h1>MAP PAGE</h1>
      <p>I see {totalSkills} Skills!</p>
      <MapImage title="The Shire"/>
    </div>
  );
}
