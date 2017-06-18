import { combineReducers } from 'redux'
import BotsReducer from './reducer_bots'

const rootReducer = combineReducers({
  bots: BotsReducer
})

export default rootReducer
