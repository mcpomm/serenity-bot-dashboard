const bots = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOTLIST':
      return action.list
    default:
      return state
  }
}

export default bots
