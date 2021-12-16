import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRpgContext} from "../../context/providers"

export const SkillTable = () => {

  // TODO: prove
  const state= useSelector(state => state?.game)
  // const {state} = useRpgContext()
  const {character: {skills}} = state

  return (
    <div>
      <table id="SkillTable">
        <tbody>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
        {
          skills?.map((skill, i) => {
            const {name, value} = skill
            const key = `skill-tr-${i}`

            return (
              <tr key={key}>
                <td>{name}</td>
                <td>{value}</td>
                <td>
                  <button>{value}</button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}
