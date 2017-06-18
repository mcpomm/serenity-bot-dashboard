import { connect } from 'react-redux';
import BotList from '../components/component_botlist';


const mapStateToProps = (state) => ({
  botlist: state.bots
})


export default connect(mapStateToProps)(BotList)
