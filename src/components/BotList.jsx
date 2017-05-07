import React from 'react';
import SocketIOClient from 'socket.io-client';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'initial',
      bots: []
    };
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.emit('getBotList',{});
    this.socket.on('broad', this.onBroad.bind(this));
    this.socket.on('botList', this.onBotList.bind(this));
  }

  onBroad(messages) {
    this.setState({
      value: messages,
    });
  }

  onBotList(bots) {
    bots = JSON.parse(bots);
    let renderBots = [];
    bots.map(function(bot) {
      renderBots.push({id:bot._id, title:bot.title, ip:bot.ip, status:bot.status})
    })
    this.setState({
      bots: renderBots
    });
  }

  render() {
    console.log('geht was?');
    return (
      <ListGroup>
        {
          this.state.bots.map(function(bot) {
            return <ListGroupItem key={bot._id}>{bot.title} | {bot.ip} | {bot.status}</ListGroupItem>
          })
        }
      </ListGroup>
    );
  }
}
