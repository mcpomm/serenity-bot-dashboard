import React from 'react'
import BotSocket from '../containers/BotSocket'
import Bots from '../containers/Bots'
import SelectedBot from '../containers/Bot'

const App = () => (
  <div>
    <BotSocket />
    <Bots />
    <SelectedBot />
  </div>
)

export default App
