const { EmbedBuilder } = require('discord.js')
const { Client } = require('../../../index')
const createLog = require('../../utils/log/createLog')
const replyError = require('../../utils/error/replyError')

module.exports.run = async (inter) => {
  try {
    const title = inter.options.getString('title')
    const url = inter.options.getString('url')
    const channel = inter.channel.id

    const embed = new EmbedBuilder()
      .setColor('DarkGrey')
      .setDescription(`[${title}](${url})`)

    await Client.channels.cache.get(channel).send({ content: '', embeds: [embed] })

    await inter.reply({ content: `Mensagem enviada para o canal <#${channel}>!`, ephemeral: true })

    await createLog(inter)
  } catch (error) {
    replyError(inter, error)
  }
}

module.exports.help = {
  name: 'url',
  memberPermissions: []
}
