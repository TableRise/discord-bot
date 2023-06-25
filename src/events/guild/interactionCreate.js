const { InteractionType, EmbedBuilder, Events } = require('discord.js')
const Client = require('../../../index').Client

module.exports = {
  name: Events.InteractionCreate,
  async execute(inter) {
    if (inter.type === InteractionType.ApplicationCommand) {
      let commands = Client.commands.get(inter.commandName)

      if (!inter.member.permissions.has(commands.help.memberPermissions)) {
        const responseErro = new EmbedBuilder()
          .setColor('Red')
          .setDescription('🛑 Você não tem permissão para usar este comando!')

        return await inter.reply({ embeds: [responseErro], ephemeral: true })
      }
      if (commands) commands.run(inter)
    }
  }
}
