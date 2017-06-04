import { connect } from 'react-redux'
import BotList from '../components/BotList'

const getViewBotList = (botlist, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return botlist
    case 'SHOW_ONLINE':
      return botlist.filter(t => t.online)
    case 'SHOW_OFFLINE':
      return botlist.filter(t => !t.online)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  botlist: getViewBotList(state.bots, state.visibilityFilter)
})

const mapDispatchToProps = {}

const ViewBotList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BotList)

export default ViewBotList
