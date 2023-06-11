const { EmbedBuilder, AttachmentBuilder } = require('discord.js')
const { Client } = require('../../../index')
const createLog = require('../../utils/log/createLog')

module.exports.run = async (inter) => {
  try {
    const alt = inter.options.getString('alt')
    const img = inter.options.getString('img')
    const channel = inter.options.getChannel('canal').id

    const file = new AttachmentBuilder().setFile(img).setDescription(alt)

    await Client.channels.cache
      .get(channel)
      .send({ content: '', files: [file] })

    await inter.reply({
      content: `Imagem enviada para o canal <#${channel}>!`,
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
  name: 'media',
  memberPermissions: []
}
