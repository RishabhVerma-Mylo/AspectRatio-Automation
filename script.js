const data = require('./script.json')
var fs = require('fs')
const {
  data: { items },
} = data

let returnObj = (obj) => {
  let { items } = obj

  return items.map((item) => ({
    _id: item._id,
    itemType: item.itemType,
    image: item.image,
    itemName: item.itemName,
  }))
}

let scriptObj = items.map((item) => {
  if (item.items && item.items.length > 0) {
    return returnObj(item)
  }
  return {
    _id: item._id,
    itemType: item.itemType,
    image: item.image,
    itemName: item.itemName,
  }
})

console.log(scriptObj)

var json = JSON.stringify(scriptObj)

fs.writeFile('resultObject.json', json, 'utf8', () =>
  console.log('Done Writing')
)
