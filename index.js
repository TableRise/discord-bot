const discord = require('discord.js')
const dotenv = require('dotenv')
const colors = require('colors')
const fs = require('fs')
const collectionLog = require('./src/utils/log/collectionLog')

const Client = new discord.Client({
  intents: [
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildMembers,
    discord.GatewayIntentBits.GuildMessages,
    discord.GatewayIntentBits.GuildMessageReactions,
    discord.GatewayIntentBits.MessageContent
  ],
  allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
})

dotenv.config()

Client.commands = new discord.Collection()
Client.events = new discord.Collection()
module.exports.Client = Client

fs.readdirSync('./src/events/').forEach((dir) => {
  fs.readdir(`./src/events/${dir}`, (err) => {
    if (err) throw err

    let jsFiles = fs
      .readdirSync(`./src/events/${dir}`)
      .filter((f) => f.split('.').pop() === 'js')
    if (jsFiles.length <= 0) return console.log(colors.red.bold('No event found!'))

    jsFiles.forEach((file) => {
      let event = require(`./src/events/${dir}/${file}`)
      collectionLog('Events', file)

      try {
        if (event.once) {
          Client.once(event.name, (...args) => event.execute(...args))
        } else {
          Client.on(event.name, (...args) => event.execute(...args))
        }
      } catch (err) {
        return console.log(err)
      }
    })
  })
})

fs.readdirSync('./src/commands/').forEach((dir) => {
  fs.readdir(`./src/commands/${dir}`, (err) => {
    if (err) throw err

    let jsFiles = fs
      .readdirSync(`./src/commands/${dir}`)
      .filter((f) => f.split('.').pop() === 'js')
    if (jsFiles.length <= 0)
      return console.log(colors.red.bold('No command found!'))

    jsFiles.forEach((file) => {
      let fileGet = require(`./src/commands/${dir}/${file}`)
      collectionLog('Commands', file)

      try {
        Client.commands.set(fileGet.help.name, fileGet)
      } catch (err) {
        return console.log(err)
      }
    })
  })
})

Client.login(process.env.DISCORD_TOKEN)
