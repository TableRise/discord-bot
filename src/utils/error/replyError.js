const { EmbedBuilder } = require('discord.js')
const enumRole = require('../../enums/enumRole')

async function replyError(inter, error) {
  const erro = new EmbedBuilder()
    .setColor('Yellow')
    .setTitle('Oh não, ocorreu um erro!')
    .setDescription(`Caso isso persista, contate ${enumRole.STAFF}.`)

  await inter.editReply({ embeds: [erro] })
  console.log(error)
}

module.exports = replyError
