const { EmbedBuilder } = require('discord.js')
const { roleMention } = require('../../enums/enumRole')

async function replyError(inter, error) {
  const erro = new EmbedBuilder()
    .setColor('Yellow')
    .setTitle('Oh não, ocorreu um erro!')
    .setDescription(`Caso isso persista, contate ${roleMention.STAFF}.`)

  await inter.editReply({ embeds: [erro] })
  console.log(error)
}

module.exports = replyError
