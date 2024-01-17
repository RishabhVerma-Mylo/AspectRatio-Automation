var fs = require('fs')
// const { getAspectRatio } = require('./utils/getImageAspect')
const { modifyObject } = require('./utils/modifyObject')

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

// const newAspectObject = getNewAspectObject(flattenArray)

// console.log('promise array', newAspectObject)

// Promise.all(newAspectObject)
//   .then((res) => {
//     fs.writeFile(
//       `./ResultFiles/finalObject-${res[0]._id}.json`,
//       JSON.stringify(res),
//       'utf8',
//       () =>
//         console.log(
//           'Done Writing Result File `./ResultFiles/finalObject-${res[0]._id}.json'
//         )
//     )
//   })
//   .catch((error) => console.log(error))

module.exports = { getNewAspectObject }
