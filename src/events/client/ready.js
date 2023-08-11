const { ActivityType, Events } = require('discord.js')
const { createCmd, globalCmd } = require('../../commandHandler')
const colors = require('colors')
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
    console.log(colors.green.bold(`${client.user.tag} is online`))
  }
}
