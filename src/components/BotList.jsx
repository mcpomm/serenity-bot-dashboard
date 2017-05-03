import React from 'react';
import SocketIOClient from 'socket.io-client';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'initial'
    };
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.on('broad', this.onReceivedMessage.bind(this));
  }

  onReceivedMessage(messages) {
    this.setState({
      value: messages
    });
  }

  render() {
    console.log('geht was?');
    return (
      <ListGroup>
        <ListGroupItem>{this.state.value}</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    );
  }
}
