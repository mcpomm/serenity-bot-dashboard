
export const showBots = (botlist) => ({
  type: 'SHOW_BOTS',
  payload: botlist
})

export const addBot = (bot) => ({
  type: 'ADD_BOT',
  payload: bot
})

export const selectBot = (bot) => ({
  type: 'BOT_SELECTED',
  payload: bot
})
