const XLSX = require('xlsx')

function writeToExcel(students) {
  const workSheet = XLSX.utils.json_to_sheet(students)
  const workBook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workBook, workSheet, 'students')
  // Generate buffer
  XLSX.writeFile(workBook, './Excel/studentsData.xlsx')
}

module.exports = {
  writeToExcel,
}
