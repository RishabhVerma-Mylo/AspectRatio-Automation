let { data } = require('../script.json')
let typeToKeep = ['BANNER', 'MARQUEE_BANNERS', 'MULTIPLE_ITEMS']

let returnObj = (obj) => {
  let { items } = obj

  return items.map((item) => ({
    _id: item._id,
    itemType: item.itemType,
    image: item.image,
    itemName: item.itemName,
  }))
}

function modifyObject(obj) {
  const newData = obj.map((item) => {
    // console.log(!typeToKeep.includes(item.itemType))
    // if (!typeToKeep.includes(item.itemType)) return
    if (item.items && item.items.length > 0) return returnObj(item)
    else
      return {
        _id: item._id,
        itemType: item.itemType,
        image: item.image,
        itemName: item.itemName,
      }
  })

  return newData.flat(2).filter((item) => item && item._id !== undefined)

  return newData
}

module.exports = { modifyObject }
