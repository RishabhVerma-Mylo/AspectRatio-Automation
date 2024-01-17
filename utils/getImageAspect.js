const axios = require('axios')
const sharp = require('sharp')

function calculateGCF(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

function calculateAspectRatioWithGCF(width, height, flag = false) {
  if (width && height) {
    const gcf = calculateGCF(width, height)

    // Divide width and height by their GCF to get the aspect ratio
    let aspectRatioWidth = width / gcf
    let aspectRatioHeight = height / gcf

    return flag
      ? { width: (width / height).toFixed(1), height: 1 }
      : { width: aspectRatioWidth, height: aspectRatioHeight }
  } else {
    throw new Error(
      'Both width and height must be provided to calculate the aspect ratio.'
    )
  }
}

async function getImageDimensions(url) {
  let width, height
  try {
    // Fetch the image data using axios
    const response = await axios.get(url, { responseType: 'arraybuffer' })

    // Use sharp to read the image buffer and get dimensions
    const { width, height } = await sharp(response.data).metadata()

    // console.log(`Image dimensions: ${width} x ${height}`)

    return { width, height }
  } catch (error) {
    // console.error('Error loading image:', error.message)
  }
}

// getImageDimensions(imageUrl)

let getAspectRatio = async (obj) => {
  try {
    let ratio = true
    let { image } = obj
    if (!image) {
      throw error('Image not present')
    }
    // console.log(image)
    let { width, height } = await getImageDimensions(image)
    // console.log(width, height)
    const aspectRatio = calculateAspectRatioWithGCF(width, height, ratio)
    // console.log(`Aspect Ratio: ${aspectRatio.width}:${aspectRatio.height}`)
    return {
      width,
      height,
      'Aspect Ratio': `${aspectRatio.width}:${aspectRatio.height}`,
    }
  } catch (error) {
    // console.error('Error loading image:', error.message, obj)
  }
}

module.exports = { getAspectRatio }
