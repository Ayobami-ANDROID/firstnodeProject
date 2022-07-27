const path = require('path')

const filePath = path.join('/Contents','subfolder','test.txt')
console.log(filePath)

const base =path.basename(filePath)
console.log(base)

const absoluete = path.resolve(__dirname,'Contents','subfolder','test.txt')
console.log(absoluete)


console.log(path.sep)