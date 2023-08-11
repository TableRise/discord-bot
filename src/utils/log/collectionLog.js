const colors = require('colors')

async function collectionLog(collection, file) {
  console.log(colors.bold(collection) + ' => ' + colors.blue.underline(file) + colors.green(' was loaded!'))
}

module.exports = collectionLog