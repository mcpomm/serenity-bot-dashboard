import { connect } from 'react-redux';
import BotList from '../components/BotList';
import { selectBot } from '../actions/index';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  botlist: state.bots,
  selectedBot: state.activeBot

})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectBot: selectBot }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BotList)
