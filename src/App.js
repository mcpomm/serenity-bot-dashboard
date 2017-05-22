import React, { Component } from 'react';
import BotList from './components/BotList';
//import logo from './logo.svg';
import BotRouter from './BotRouter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>serenity bots</h1>
        <BotRouter />
      </div>
    );
  }
}

export default App;
