import { connect } from 'react-redux'
import { showBots } from '../actions'
import SocketIOClient from 'socket.io-client'
const socket = SocketIOClient('http://localhost:3001');

const Bots = ({ dispatch }) => {
  socket.emit('getBotList',{});
  socket.on('botList', (data) => {
    dispatch(showBots(JSON.parse(data)))
  });

  return(null);

}

export default connect()(Bots)
