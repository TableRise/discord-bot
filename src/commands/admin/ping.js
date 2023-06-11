const { EmbedBuilder } = require('discord.js')
const createLog = require('../../utils/log/createLog')

module.exports.run = async (inter) => {
  try {
    const embed = new EmbedBuilder()
      .setColor('Green')
      .setDescription('🏓 Pong!')

    await inter.reply({ embeds: [embed], ephemeral: true })

    await createLog(inter)
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
  name: 'ping',
  memberPermissions: []
}
