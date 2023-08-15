const { EmbedBuilder } = require('discord.js')
const createLog = require('../../utils/log/createLog')
const replyError = require('../../utils/error/replyError')
const { roleMention } = require('../../enums/enumRole')

module.exports.run = async (inter) => {
  try {
    const embed = new EmbedBuilder()
      .setColor('White')
      .setTitle('Comandos')
      .setDescription(`
        </bug:1122311300027011077> Informar bug.
        </support:1122311300027011078> Solicitar ajuda da ${roleMention.STAFF}.
        </sugestao:1122311300027011076> Enviar sugestões para o projeto.
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
