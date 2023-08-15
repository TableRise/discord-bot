const { time } = require('discord.js')
const { Client } = require('../../../index')
const { channelId } = require('../../enums/enumChannel')
const { roleMention } = require('../../enums/enumRole')

async function createSupport(inter) {
  try {

    await inter.reply({
      content: '**Solicitação enviada!**',
      ephemeral: true
    })

    const title = inter.fields.getTextInputValue('supportTitle')
    const description = inter.fields.getTextInputValue('supportDescription')
    const userName = inter.user.username
    const userId = inter.user.id
    const date = new Date()

    const message = `
      > ### :sos: ${roleMention.SUPPORT}
      > **Username**: ${userName}
      > **User ID**: ${userId}
      > **Title**: ${title}
      > **Description**: ${description}
      > **Date**: ${time(date)}
    `

    await Client.channels.cache.get(channelId.SUPPORT).send(message)
  } catch (error) {
    console.log(error)
  }
}

module.exports = createSupport
