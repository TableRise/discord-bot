const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, InteractionType } = require('discord.js')
const { Client } = require('../../../index')
const createLog = require('../../utils/log/createLog')
const createSuggestion = require('../../utils/modal/suggestion')
const replyError = require('../../utils/error/replyError')

module.exports.run = async (inter) => {
  try {
    if (!inter.isChatInputCommand()) return

    const modal = new ModalBuilder()
      .setCustomId('suggestion')
      .setTitle('Diga-nos sua sugestão')

    const title = new TextInputBuilder()
      .setCustomId('suggestionTitle')
      .setLabel('Qual a sugestão?')
      .setStyle(TextInputStyle.Short)

    const description = new TextInputBuilder()
      .setCustomId('suggestionDescription')
      .setLabel('Se desejar, descreva sua sugestão.')
      .setStyle(TextInputStyle.Paragraph)
      .setRequired(false)

    const titleRow = new ActionRowBuilder().addComponents(title)
    const descriptionRow = new ActionRowBuilder().addComponents(description)

    modal.addComponents(titleRow, descriptionRow)

    await inter.showModal(modal)
    createLog(inter)

    Client.on('interactionCreate', async (inter) => {
      if (inter.type !== InteractionType.ModalSubmit) return
      if (inter.customId === 'suggestion') {
        createSuggestion(inter)
      }
    })
  } catch (error) {
    replyError(inter, error)
  }
}

module.exports.help = {
  name: 'sugestao',
  memberPermissions: []
}
