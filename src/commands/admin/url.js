const { EmbedBuilder } = require('discord.js')
const { Client } = require('../../../index')
const createLog = require('../../utils/log/createLog')

module.exports.run = async (inter) => {
  try {
    const titulo = inter.options.getString('titulo')
    const url = inter.options.getString('url')
    const canal = inter.channel.id

    const embed = new EmbedBuilder()
      .setColor('LightGrey')
      .setDescription(`[${titulo}](${url})`)

    await Client.channels.cache
      .get(canal)
      .send({ content: '', embeds: [embed] })

    await inter.reply({
      content: `Mensagem enviada para o canal <#${canal}>!`,
      ephemeral: true
    })

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
  name: 'url',
  memberPermissions: []
}
