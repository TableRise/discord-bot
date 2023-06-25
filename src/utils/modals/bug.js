const { EmbedBuilder, InteractionType } = require('discord.js')
const Client = require('../../../index')
const enumChannel = require('../../enums/enumChannel')

Client.on('interactionCreate', async (inter) => {
  try {
    if (inter.type !== InteractionType.ModalSubmit) return

    if (inter.customId === 'bug') {
      await inter.reply({
        content: '**Bug Reportado!**',
        ephemeral: true
      })

      const title = inter.fields.getTextInputValue('bugTitle')
      const description = inter.fields.getTextInputValue('bugDescription')

      const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle(':inbox_tray: Nova Sugestão')
        .addFields([
          { name: 'Autore:', value: `<@${inter.user.id}>` },
          { name: 'Sugestão:', value: `${title}` },
          { name: 'Descrição:', value: `→ ${description}` }
        ])

      await Client.channels.cache.get(enumChannel.BUG).send({ embeds: [embed] })
    }
  } catch (err) {
    console.log(err)
  }
})
