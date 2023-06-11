const Log = require('../../models/log')

async function createLog(inter) {
  try {
    const newLog = new Log({
      commandName: inter.commandName,
      commandId: inter.commandId,
      userName: inter.user.username + '#' + inter.user.discriminator,
      userId: inter.user.id
    })

    await newLog.save()
  } catch (error) {
    console.log(error)
  }
}

module.exports = createLog
