const data = require('./revisedObject.json')
const { getAspectRatio } = require('./getImageAspect')

const flattenArray = data.flat(2).filter((item) => item._id !== undefined)

// console.log(flattenArray)

const getNewAspectObject = () => {
  try {
    const newAspectObject = flattenArray.map(async (item) => {
      let aspectRatio = await getAspectRatio(item)
      return {
        ...item,
        aspectRatio,
      }
    })

    return newAspectObject
  } catch (error) {
    console.log(error)
  }
}

const newAspectObject = getNewAspectObject()

Promise.all(newAspectObject).then((res) => console.log(res))
