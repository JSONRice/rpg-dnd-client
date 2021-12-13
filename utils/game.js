import gameClient from './game-client'

// register event handlers
/*
There are currently five types of interactions that can occur with the server.
1) General Chat to all users,
2) Private chat from one user to another (includes DM)
3) Game Action (move, cast, attack, skill, save-roll, etc),
4) character data exchange,
5) binary data exchange
*/

// handler to detect a successful connected event
gameClient.addGameEventListener('connect', (event)=>{
  console.log(event)
  // what to do when we are connected

  // update the store with connected status
  store.dispatch('setConnected', true)
})

// handler to detect a successful connected event
gameClient.addGameEventListener('receive-message', (event)=>{
  console.log(event)
  // what to do when we send a message

  // update the store with connected status
  store.dispatch('addChatMessage', event)
})

export default {
  connect(username, password) {
    gameClient.connect(username,  password)
  },
  sendMessage(msg) {
    console.log("game-service called with message: " + JSON.stringify(msg))
    gameClient.sendMessage(msg)
  }
}
