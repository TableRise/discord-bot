const { ActivityType, Events } = require('discord.js')
const { createCmd, globalCmd } = require('../../commandHandler')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    client.user.setPresence({
      activities: [{ name: 'Dungeons & Dragons', type: ActivityType.Playing }],
      status: 'online'
    })
    globalCmd(client)
    createCmd(client, process.env.GUILD_ID)
    console.log(`${client.user.tag} is online! 🟢`)
  }
}
