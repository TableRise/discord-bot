const { ActivityType } = require('discord.js')
const Client = require('../../../index')
const { createCmd, globalCmd } = require('../../dataHandler')

const dotenv = require('dotenv')
dotenv.config()

Client.on('ready', () => {
  Client.user.setPresence({
    activities: [{ name: 'Dungeons & Dragons', type: ActivityType.Playing }],
    status: 'online'
  })
  console.log(`${Client.user.tag} is online! 🟢`)

  globalCmd(Client)
  createCmd(Client, process.env.GUILD_ID)
})
