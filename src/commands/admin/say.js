const { Client } = require('../../../index')
const createLog = require('../../utils/log/createLog')
const replyError = require('../../utils/error/replyError')

module.exports.run = async (inter) => {
  try {
    const text = inter.options.getString('text')
    const channel = inter.options.getChannel('channel').id
    let add1 = inter.options.getString('add1')
    let add2 = inter.options.getString('add2')
    let add3 = inter.options.getString('add3')
    let add4 = inter.options.getString('add4')
    let add5 = inter.options.getString('add5')
    let add6 = inter.options.getString('add6')
    let add7 = inter.options.getString('add7')
    let add8 = inter.options.getString('add8')
    let add9 = inter.options.getString('add9')

    if (!add1) { add1 = '' }
    if (!add2) { add2 = '' }
    if (!add3) { add3 = '' }
    if (!add4) { add4 = '' }
    if (!add5) { add5 = '' }
    if (!add6) { add6 = '' }
    if (!add7) { add7 = '' }
    if (!add8) { add8 = '' }
    if (!add9) { add9 = '' }

    await Client.channels.cache.get(channel).send({ content: `${text} \n${add1} \n${add2} \n${add3} \n${add4} \n${add5} \n${add6} \n${add7} \n${add8} \n${add9}` })

    await inter.reply({ content: `Mensagem enviada para o channel <#${channel}>!`, ephemeral: true })

    await createLog(inter)
  } catch (error) {
    replyError(inter, error)
  }
}

module.exports.help = {
  name: 'say',
  memberPermissions: []
}
