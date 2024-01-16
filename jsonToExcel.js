const { writeToExcel } = require('./utils/writeToExcel')
const fs = require('fs')
const path = require('path')

data = []
const jsonsInDir = fs
  .readdirSync('./ResultFiles')
  .filter((file) => path.extname(file) === '.json')

jsonsInDir.forEach((file) => {
  const fileData = fs.readFileSync(path.join('./ResultFiles', file))
  const json = JSON.parse(fileData.toString())
  console.log(json)
  data.push(...json)
})

console.log(data)
writeToExcel(data)
