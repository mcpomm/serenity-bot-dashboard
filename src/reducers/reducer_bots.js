import _ from 'lodash'

const updateBot = (state, bot) => {
  if (state._id !== bot._id) {
    return state
  }
  return _.merge(state, bot);
}

const bots = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_BOTS':
      return action.payload;
    case 'ADD_BOT':
      return [...state, action.payload];
    case 'UPDATE_BOT':
      return state.map(b => {
        return updateBot(b, action.payload);
      })
    default:
      return state;
  }
}

export default bots
