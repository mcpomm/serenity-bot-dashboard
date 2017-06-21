
export default function(state = [], action) {
  switch(action.type) {
    case 'SHOW_BOTS':
      return action.payload;
    case 'ADD_BOT':
      return [...state, action.payload];
    default:
      return state;
  }
}
