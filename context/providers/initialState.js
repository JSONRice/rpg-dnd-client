import { character, monsters, test } from '../data'

export const initialState = {
  character,
  chatMessages: [{id:0,type:"info",data:"Beginning of messages"}],
  images:[],
  isConnected: false,
  monsters,
  totalSkills: 10
}
