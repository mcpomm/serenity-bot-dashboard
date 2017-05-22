import React, { Component } from 'react';
import BotCard from './components/BotCard';
// Import routing components
import { Route, BrowserRouter as Router } from 'react-router-dom';
// Import custom components
import BotList from './components/BotList';




class Botrouter extends Component {
  render() {
    return(
      <Router>
         <div>
            <Route path="/" component={BotList} />
            <Route path="/:id" component={BotCard}/>
         </div>
       </Router>
    );
  }
}

export default Botrouter;
