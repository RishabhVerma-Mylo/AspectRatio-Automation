const data = require('./script.json')
var fs = require('fs')
const { returnScriptObj } = require('./utils/modifyObject')
const {
  data: { items },
} = data

let scriptObj = returnScriptObj(items)

console.log(scriptObj)

var json = JSON.stringify(scriptObj)

fs.writeFile('resultObject.json', json, 'utf8', () =>
  console.log('Done Writing')
)

module.exports = { scriptObj }
