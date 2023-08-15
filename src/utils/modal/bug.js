const { time } = require('discord.js')
const { Client } = require('../../../index')
const { channelId } = require('../../enums/enumChannel')
const { roleMention } = require('../../enums/enumRole')

async function createBug(inter) {
  try {
    await inter.reply({
      content: '**Bug Reportado!**',
      ephemeral: true
    })

    const title = inter.fields.getTextInputValue('bugTitle')
    const description = inter.fields.getTextInputValue('bugDescription')
    const userName = inter.user.username
    const userId = inter.user.id
    const date = new Date()

    const message = `
      > ### :lady_beetle: ${roleMention.BUG}
      > **Username**: ${userName}
      > **User ID**: ${userId}
      > **Title**: ${title}
      > **Description**: ${description}
      > **Date**: ${time(date)}
    `

    await Client.channels.cache.get(channelId.BUG).send(message)
  } catch (error) {
    console.log(error)
  }
}

module.exports = createBug
