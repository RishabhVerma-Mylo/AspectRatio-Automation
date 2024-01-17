const fs = require('fs')
const path = require('path')
const { writeToExcel } = require('./utils/writeToExcel')

let totalItems = []

const jsonsInDir = fs
  .readdirSync('./ResultFiles')
  .filter((file) => path.extname(file) === '.json')

jsonsInDir.forEach((file) => {
  const fileData = fs.readFileSync(path.join('./ResultFiles', file))
  const json = JSON.parse(fileData.toString())
  const condition = json.filter((item) => item.itemType === 'BANNER')

  totalItems.push(...condition)
})

console.log(totalItems.length)

fs.writeFile(`./finalObject.json`, JSON.stringify(totalItems), 'utf8', () =>
  console.log('Done Writing')
)

writeToExcel(totalItems)
