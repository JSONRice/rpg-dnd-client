import SockJS from "sockjs-client"
import WebStompClient from 'webstomp-client'

// define the game service resources here
let _isConnected = false
let _socket = null
let _stompClient = null

// eslint-disable-next-line no-unused-vars
const _eventHandlers = {
  'connect': [], // functions to call when a connect event occurs
  'disconnect': [],
  'receive-message': [],
  'load': []
}

const messageHandler = (message) => {
  // fire the 'connect' callbacks
  let msg = JSON.parse(message.body)

  for (let listener in _eventHandlers['receive-message']) {
    listener.call(msg)
  }

  return msg
}

const connectionSuccess = (frame) => {
  _isConnected = true
  // register ''default' message channel listeners
  _stompClient.subscribe('/topic/chat', message => messageHandler(message))
  _stompClient.subscribe('/user/queue/message', message => messageHandler(message))

  // fire the 'connect' callbacks to all registered connect listeners
  const event = {type: 'connect', success: true} // event details
  for (let listener of _eventHandlers['connect']) {
    listener(event)
  }
}

const connectionError = (error) => {
  _isConnected = false
}

export default {
  // type is the event type string, eventListener - callback
  addGameEventListener(type, eventListener) {
    const listeners = _eventHandlers[type]

    if (!listeners) {
      _eventHandlers[type] = []
    }

    _eventHandlers[type].push(eventListener)
  },

  connect(username, password) {
    _isConnected = false
    _socket = new SockJS(process.env.SERVER_URI)
    _stompClient = WebStompClient.over(_socket)
    const connectCallback = frame => connectionSuccess(frame)
    _stompClient.connect({username, password}, connectCallback, connectionError)
  },

  async disconnect() {
    _isConnected = false
  },

  sendMessage(msg) {
    let type = msg.type
    let msgString = JSON.stringify(msg)

    if (_stompClient && _isConnected) {

      switch (type) {
        case 'party':
          _stompClient.send("/app/chat", msgString, {})
          break
        case 'private':
          _stompClient.send("/app/messages", msgString, {})
          break
      }
    }
  },

  get isConnected() {
    return _isConnected
  }
}
