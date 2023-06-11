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
      .setCustomId('bug')
      .setTitle('Informe detalhes sobre o bug')

    const title = new TextInputBuilder()
      .setCustomId('bugTitle')
      .setLabel('Qual o comportamento deseja reportar?')
      .setStyle(TextInputStyle.Short)

    const description = new TextInputBuilder()
      .setCustomId('bugDescription')
      .setLabel(
        'Descreva com detalhes: \n- Onde acontece? \n- Qual o comportamento esperado? \n- Como reproduzir?'
      )
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
  name: 'bug',
  memberPermissions: []
}
