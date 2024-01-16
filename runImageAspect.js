var fs = require('fs')
const data = require('./resultObject.json')

const { getAspectRatio } = require('./utils/getImageAspect')
const { modifyObject } = require('./utils/modifyObject')

const flattenArray = modifyObject(data)

console.log(flattenArray.length)
const getNewAspectObject = (obj) => {
  try {
    const newAspectObject = obj.map(async (item) => {
      let aspectRatio = await getAspectRatio(item)
      return {
        ...item,
        ...aspectRatio,
      }
    })

    return newAspectObject
  } catch (error) {
    console.log(error)
  }
}

const newAspectObject = getNewAspectObject(flattenArray)

// console.log('promise array', newAspectObject)

Promise.all(newAspectObject)
  .then((res) => {
    fs.writeFile(
      `./ResultFiles/finalObject-${res[0]._id}.json`,
      JSON.stringify(res),
      'utf8',
      () => console.log('Done Writing')
    )
  })
  .catch((error) => console.log(error))

module.exports = { getNewAspectObject }
