import { connect } from 'react-redux';
import BotCard from '../components/BotDetail';


const mapStateToProps = (state) => ({
  bot: state.activeBot
})


export default connect(mapStateToProps)(BotCard)
