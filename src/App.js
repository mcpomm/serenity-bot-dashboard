import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import BotList from './components/BotList';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>serenity bots</h1>
        <BotList>Danger</BotList>
      </div>
    );
  }
}

export default App;
