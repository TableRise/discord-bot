const { EmbedBuilder } = require('discord.js')
const createLog = require('../../utils/log/createLog')
const replyError = require('../../utils/error/replyError')

module.exports.run = async (inter) => {
  try {
    const embed = new EmbedBuilder()
      .setColor('Green')
      .setDescription('🏓 Pong!')

    await inter.reply({ embeds: [embed], ephemeral: true })

    await createLog(inter)
  } catch (error) {
    replyError(inter, error)
  }
}

module.exports.help = {
  name: 'ping',
  memberPermissions: []
}
