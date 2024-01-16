const axios = require('axios')
// import { imageDimensionsFromStream } from 'image-dimensions'
const url = require('url')
const https = require('node:https')
const sizeOf = require('image-size')

function getImageDimensionsAlt(imgUrl) {
  return new Promise((resolve, reject) => {
    try {
      // Fetch the image data using axios
      const options = url.parse(imgUrl)

      https.get(options, function (response) {
        const chunks = []
        response
          .on('data', function (chunk) {
            chunks.push(chunk)
          })
          .once('end', function () {
            const buffer = Buffer.concat(chunks)
            // console.log(sizeOf(buffer))
            resolve(sizeOf(buffer))
          })
      })
    } catch (error) {
      // console.error('Error loading image:', error.message)
      reject(error)
    }
  })
}

module.exports = { getImageDimensionsAlt }
