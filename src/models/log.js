const mongoose = require('mongoose')

const logSchema = new mongoose.Schema(
  {
    commandName: { type: String },
    commandId: { type: String },
    userName: { type: String },
    userId: { type: String },
    date: { type: String, default: new Date() }
  },
  { collection: 'logs' }
)

module.exports = mongoose.model('log', logSchema)
