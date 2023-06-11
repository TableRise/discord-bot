const { EmbedBuilder, InteractionType } = require('discord.js')
const Client = require('../../../index')
const dotenv = require('dotenv')
dotenv.config()

Client.on('interactionCreate', async (inter) => {
  try {
    if (inter.type !== InteractionType.ModalSubmit) return

    if (inter.customId === 'support') {
      await inter.reply({
        content: '**Solicitação enviada!**',
        ephemeral: true
      })

      const title = inter.fields.getTextInputValue('supportTitle')
      const description = inter.fields.getTextInputValue('supportDescription')
      const channel = process.env.SUPPORT_CHANNEL

      const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle(':inbox_tray: Nova Sugestão')
        .addFields([
          { name: 'Autore:', value: `<@${inter.user.id}>` },
          { name: 'Sugestão:', value: `${title}` },
          { name: 'Descrição:', value: `→ ${description}` }
        ])

      await Client.channels.cache.get(channel).send({ embeds: [embed] })
    }
  } catch (err) {
    console.log(err)
  }
})
