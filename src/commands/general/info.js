const { EmbedBuilder } = require('discord.js')
const createLog = require('../../utils/log/createLog')
const replyError = require('../../utils/error/replyError')
const { roleMention } = require('../../enums/enumRole')
const { commandMention } = require('../../enums/enumCommand')

module.exports.run = async (inter) => {
  try {
    const embed = new EmbedBuilder()
      .setColor('White')
      .setTitle('Comandos')
      .setDescription(`
        ${commandMention.BUG} Informar bug.
        ${commandMention.SUGGESTION} Solicitar ajuda da ${roleMention.STAFF}.
        ${commandMention.SUPPORT} Enviar sugestões para o projeto.
      `)

    await inter.reply({ embeds: [embed] })

    await createLog(inter)
  } catch (error) {
    replyError(inter, error)
  }
}

module.exports.help = {
  name: 'info',
  memberPermissions: []
}
