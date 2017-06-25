import { connect } from 'react-redux'
import { showBots, addBot, updateBot } from '../actions'
import SocketIOClient from 'socket.io-client'

const socket = SocketIOClient('http://localhost:3001');

const Bots = ({ dispatch }) => {
  socket.emit('getBotList',{});
  socket.on('botList', (data) => {
    dispatch(showBots(JSON.parse(data)))
  });
  socket.on('bot', (data) => {
    dispatch(addBot(JSON.parse(data)))
  });
  socket.on('updateBot', (data) => {
    console.log("UPDATE BOT", JSON.parse(data));
    dispatch(updateBot(JSON.parse(data)))
  });
  return(null);

}

export default connect()(Bots);
