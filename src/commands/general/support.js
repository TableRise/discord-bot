const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, InteractionType } = require('discord.js')
const Client = require('../../../index')
const createLog = require('../../utils/log/createLog')
const createSupport = require('../../utils/modal/support')
const replyError = require('../../utils/error/replyError')

module.exports.run = async (inter) => {
  try {
    if (!inter.isChatInputCommand()) return

    const modal = new ModalBuilder()
      .setCustomId('support')
      .setTitle('Contate o Suporte')

    const title = new TextInputBuilder()
      .setCustomId('supportTitle')
      .setLabel('Em que podemos ajudar?')
      .setStyle(TextInputStyle.Short)

    const description = new TextInputBuilder()
      .setCustomId('supportDescription')
      .setLabel('Descreva com detalhes.')
      .setStyle(TextInputStyle.Paragraph)
      .setRequired(false)

    const titleRow = new ActionRowBuilder().addComponents(title)
    const descriptionRow = new ActionRowBuilder().addComponents(description)

    modal.addComponents(titleRow, descriptionRow)

    await inter.showModal(modal)
    createLog(inter)

    Client.Client.on('interactionCreate', async (inter) => {
      if (inter.type !== InteractionType.ModalSubmit) return
      if (inter.customId === 'support') {
        createSupport(inter)
      }
    })
  } catch (error) {
    replyError(inter, error)
  }
}

module.exports.help = {
  name: 'support',
  memberPermissions: []
}
