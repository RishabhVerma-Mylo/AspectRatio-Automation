let {
  data: { items: data },
} = require('../script.json')
let typeToKeep = ['BANNER', 'MARQUEE_BANNERS', 'MULTIPLE_ITEMS', 'PRODUCT']

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
  let parentObj = {
    _id: obj._id,
    itemName: obj.itemName,
    itemType: obj.itemType,
  }
  // console.log(parentObj)
  return obj.items.map((item) => {
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

function modifyObject(obj) {
  const newData = obj.map((item) => {
    // console.log(!typeToKeep.includes(item.itemType), item.itemType)
    if (!typeToKeep.includes(item.itemType)) return
    if (item.items && item.items.length > 0) return returnScriptObj(item)
    else
      return {
        _id: item._id,
        itemType: item.itemType,
        image: item.image,
        itemName: item.itemName,
      }
  })

  // return newData.flat(2).filter((item) => item && item._id !== undefined)

  return newData
}
console.log(modifyObject(data))

module.exports = { modifyObject, returnScriptObj }
