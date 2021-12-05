import {
  RESTART_GAME,
  UPDATE_GAME_SQUARES,
  UPDATE_MOVE,
  UPDATE_IS_X_NEXT,
  UPDATE_STEP_NUMBER,
  UPDATE_HISTORY
} from '../types/rpg-types'
import { initialState } from './initialState'
import React, { createContext, useReducer } from 'react'

const context = createContext(initialState);
const { Provider } = context;

const reducer = (state, action) => {
  let { payload, type } = action;
  let { history } = state;

  switch (type) {
    case RESTART_GAME:
      initialState.history = [{ squares: Array(9).fill(null) }]
      return initialState;
    case UPDATE_IS_X_NEXT:
      return {
        ...state,
        isXNext: payload
      }
    case UPDATE_GAME_SQUARES:

      // update the game state (moves):
      history.push(payload)

      return {
        squares: payload,
        history
      }
    case UPDATE_STEP_NUMBER:
      return {
        ...state,
        stepNumber: payload
      }
    case UPDATE_HISTORY:
      return {
        ...state,
        history: payload
      }
    case UPDATE_MOVE:
      return {
        squares: history[payload].squares, // the payload is the index of the squares to load
        history // keep the states intact
      }
    default:
      return state;
  }
}

const RpgProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export { context, RpgProvider }