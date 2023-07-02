const { time } = require('discord.js')
const Client = require('../../../index')
const enumChannel = require('../../enums/enumChannel')
const enumRole = require('../../enums/enumRole')

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
      > ### :sos: ${enumRole.SUPPORT}
      > **Username**: ${userName}
      > **User ID**: ${userId}
      > **Title**: ${title}
      > **Description**: ${description}
      > **Date**: ${time(date)}
    `

    await Client.Client.channels.cache.get(enumChannel.SUPPORT).send(message)
  } catch (error) {
    console.log(error)
  }
}

module.exports = createSupport
