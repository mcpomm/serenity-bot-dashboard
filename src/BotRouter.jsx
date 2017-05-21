import React, { Component } from 'react';

// Import routing components
import { Route, BrowserRouter as Router } from 'react-router-dom';
// Import custom components
import BotList from './components/BotList';




class Botrouter extends Component {
  render() {
    return(
      <Router>
        <Route path="/" component={BotList}/>
      </Router>
    );
  }
}

export default Botrouter;