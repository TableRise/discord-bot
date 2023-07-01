const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, InteractionType } = require('discord.js')
const Client = require('../../../index')
const createLog = require('../../utils/log/createLog')
const createBug = require('../../utils/modal/bug')
const replyError = require('../../utils/error/replyError')

module.exports.run = async (inter) => {
  try {
    if (!inter.isChatInputCommand()) return

    const modal = new ModalBuilder()
      .setCustomId('bug')
      .setTitle('Informe detalhes sobre o bug')

    const title = new TextInputBuilder()
      .setCustomId('bugTitle')
      .setLabel('Qual o comportamento deseja reportar?')
      .setStyle(TextInputStyle.Short)

    const description = new TextInputBuilder()
      .setCustomId('bugDescription')
      .setLabel('Descreva com detalhes')
      .setStyle(TextInputStyle.Paragraph)
      .setRequired(false)

    const titleRow = new ActionRowBuilder().addComponents(title)
    const descriptionRow = new ActionRowBuilder().addComponents(description)

    modal.addComponents(titleRow, descriptionRow)

    await inter.showModal(modal)
    createLog(inter)

    Client.Client.on('interactionCreate', async (inter) => {
      if (inter.type !== InteractionType.ModalSubmit) return
      if (inter.customId === 'bug') {
        createBug(inter)
      }
    })
  } catch (error) {
    replyError(inter, error)
  }
}

module.exports.help = {
  name: 'bug',
  memberPermissions: []
}
