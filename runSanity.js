const fs = require('fs')
const path = require('path')

const directorys = ['./JsonFiles', './ResultFiles', './Excel']

for (let directory of directorys) {
  try {
    fs.readdir(directory, (err, files) => {
      for (const file of files) {
        fs.unlink(path.join(directory, file), (err) => {})
      }
    })
  } catch (error) {
    console.log(error)
  }
}
