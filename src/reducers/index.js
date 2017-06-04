import { combineReducers } from 'redux'
import bots from './bots'
import visibilityFilter from './visibilityFilter'

const botApp = combineReducers({
  bots,
  visibilityFilter
})

export default botApp
