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

function returnScriptObj(obj) {
  return obj.map((item) => {
    if (item.items && item.items.length > 0) {
      return {
        _id: item._id,
        itemName: item.itemName,
        itemType: item.itemType,
        items: returnObj(item),
      }
    }
    return {
      _id: item._id,
      itemType: item.itemType,
      image: item.image,
      itemName: item.itemName,
    }
  })
}

let scriptObj = returnScriptObj(items)

console.log(scriptObj)

var json = JSON.stringify(scriptObj)

fs.writeFile('resultObject.json', json, 'utf8', () =>
  console.log('Done Writing')
)

module.exports = { scriptObj }
