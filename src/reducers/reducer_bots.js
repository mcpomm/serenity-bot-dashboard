
export default function(state = [], action) {
  switch(action.type) {
    case 'SHOW_BOTS':
      return action.payload;
    default:
      return state;
  }
}
