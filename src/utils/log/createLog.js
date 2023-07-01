const { time } = require('discord.js')
const Client = require('../../../index')
const enumChannel = require('../../enums/enumChannel')

async function createLog(inter) {
  try {
    const commandName = inter.commandName
    const userName = inter.user.username
    const userId = inter.user.id
    const date = new Date()

    const message = `
      > ### :memo: Command Log
      > **Command**: ${commandName}
      > **Username**: ${userName}
      > **User ID**: ${userId}
      > **Date**: ${time(date)}
    `

    await Client.Client.channels.cache.get(enumChannel.LOG).send(message)
  } catch (error) {
    console.log(error)
  }
}

module.exports = createLog
