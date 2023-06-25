const { ChannelType, Events } = require('discord.js')

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot || message.channel.type == ChannelType.DM) return
  }
}
