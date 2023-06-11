const {
  EmbedBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder
} = require('discord.js')
const createLog = require('../../utils/log/createLog')

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
  } catch (error) {
    const erro = new EmbedBuilder()
      .setColor('Yellow')
      .setTitle('Oh não, ocorreu um erro!')
      .setDescription('Caso isso persista, contate os desenvolvedores.')

    await inter.editReply({ embeds: [erro] })
    console.log(error)
  }
}

module.exports.help = {
  name: 'sugestao',
  memberPermissions: []
}
