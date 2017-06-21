export default function(state = null, action) {
  switch(action.type) {
    case 'BOT_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
