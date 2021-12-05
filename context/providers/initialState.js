import { character, monsters, test } from '../data'

// TODO: delete skills here
export const initialState = {
  character,
  monsters,
  skills: [
    { name: "Acrobatics", value: 4 },
    { name: "Perception", value: 2 },
    { name: "Language:Orcish", value: 5 }
  ],
  totalSkills: 10
}
