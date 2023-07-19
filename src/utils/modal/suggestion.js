const { time } = require('discord.js')
const { Client } = require('../../../index')
const enumChannel = require('../../enums/enumChannel')
const enumRole = require('../../enums/enumRole')

async function createSuggestion(inter) {
  try {
    await inter.reply({
      content: '**Sugestão enviada!**',
      ephemeral: true
    })

    const title = inter.fields.getTextInputValue('suggestionTitle')
    const description = inter.fields.getTextInputValue('suggestionDescription')
    const userName = inter.user.username
    const userId = inter.user.id
    const date = new Date()

    const message = `
      > ### :bulb: ${enumRole.SUGGESTION}
      > **Username**: ${userName}
      > **User ID**: ${userId}
      > **Title**: ${title}
      > **Description**: ${description}
      > **Date**: ${time(date)}
    `

    await Client.channels.cache.get(enumChannel.SUGGESTION).send(message)
  } catch (error) {
    console.log(error)
  }
}

module.exports = createSuggestion
