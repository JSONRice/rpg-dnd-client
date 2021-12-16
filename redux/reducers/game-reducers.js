import {ADD_CHAT_MESSAGE, CONNECT, SET_CHARACTER, SET_IMAGE, SET_IS_LOGGED_IN} from '../../context/types/rpg-types'
import {clone} from '../../utils';

const initialState = {
  character: {},
  username: '',
  chatMessages: [{id: 0, type: "info", data: "Beginning of messages"}],
  images: [],
  isLoggedIn: false,
  isConnected: false,
  monsters: {},
  totalSkills: 10
}

const msgValid = msg => msg && typeof msg === 'object'

// SUBSCRIBER'S (REDUCER'S)
export const game = (state = clone(initialState), action) => {
  let {payload, type} = action

  console.log('redux is reducing: ', type)
  // console.trace()

  switch (type) {
    case ADD_CHAT_MESSAGE:
      const {msg: chatMsg} = payload

      if (msgValid(chatMsg)) {
        chatMsg.id = state.chatMessages.length + 1
        state.chatMessages = [...state.chatMessages, chatMsg]
      }

      return {
        ...state
      }
    case CONNECT:
      const {msg} = payload
      if (msgValid(msg)) {
        const {username, password} = msg
        state.username = username
      }

      return {
        ...state
      }
    case SET_IS_LOGGED_IN:

      let {character, error} = payload
      let isLoggedIn = character && Object.keys(character).length > 0 && !error

      if (!isLoggedIn) {
        character = null
      }

      return {
        ...state,
        character: {
          ...character
        },
        isLoggedIn
      }
    case SET_CHARACTER:
      const {msg: charMsg} = payload
      if (msgValid(charMsg)) {
        state.character = JSON.parse(charMsg.data)
      }

      return {
        ...state
      }
    case SET_IMAGE:
      const {msg: imgMsg} = payload
      if (msgValid(imgMsg)) {
        let strSource = "data:image/jpeg;base64," + imgMsg.data
        state.images = [...state.images, strSource]
      }

      return {
        ...state
      }
    default:
      return state
  }
}
