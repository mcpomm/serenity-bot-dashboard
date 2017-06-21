import { combineReducers } from 'redux'
import BotsReducer from './reducer_bots'
import ActiveBot from './reducer_active_bot'

const rootReducer = combineReducers({
  bots: BotsReducer,
  activeBot: ActiveBot
})

export default rootReducer
