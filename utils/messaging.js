import SockJS from "sockjs-client";
import WebStompClient from 'webstomp-client';

// define the game service resources here
let _isConnected = false;
let _socket = null;
let _stompClient = null;

const messageHandler = (message) => {
  // fire the 'connect' callbacks
  const gameMessage = JSON.parse(message.body);
  let type = gameMessage.type;

  switch (type) {
    case 'party':
    case 'private':
      store.dispatch('addChatMessage', gameMessage);
      break;
    case 'character':
      store.dispatch('loadCharacter', gameMessage);
      break;
    case 'image':
      store.dispatch('loadImage', gameMessage);
      break;
    case 'action':
    case 'lore':
      break;
  }
}

export default {
  async connect(username, password) {
    return new Promise((resolve, reject) => {
      _socket = new SockJS("/game-app");
      _stompClient = WebStompClient.over(_socket);
      _stompClient.connect(
        {username, password},
        frame => {
          _isConnected = true;
          store.dispatch('setConnected', true);
          _stompClient.subscribe('/topic/chat', message => messageHandler(message));
          _stompClient.subscribe('/user/queue/message', message => messageHandler(message));
          resolve();
        },
        error => {
          _isConnected = false;
          reject();
        }
      );
    });
  },

  sendMessage(msg) {
    let type = msg.type;
    let msgString = JSON.stringify(msg);

    if (_stompClient && _isConnected) {
      switch (type) {
        case 'party':
          _stompClient.send("/app/chat", msgString, {});
          break;
        case 'private':
          _stompClient.send("/app/messages", msgString, {});
          break;
        case 'character':
          _stompClient.send("/app/messages", msgString, {});
          break;
        case 'image':
          _stompClient.send("/app/messages", msgString, {});
          break;
      }
    }
  }
}
