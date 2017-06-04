import { connect } from 'react-redux'
import { addBotList } from '../actions'
import SocketIOClient from 'socket.io-client'

let ReceiveBotList = ({ dispatch }) => {
  let socket = SocketIOClient('http://localhost:3001');
  socket.emit('getBotList',{});
  socket.on('botList', (data) => {
    let bots = JSON.parse(data)
    dispatch(addBotList(bots))
  })

  return(null);

}
ReceiveBotList = connect()(ReceiveBotList)

export default ReceiveBotList
