const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./Contents/First.txt','utf8')
const second = readFileSync('./Contents/Second.txt','utf8')

writeFileSync('./Contents/result-sync.txt',`Here are the result : ${first}, ${second} `,{flag:'a'})
// console.log(first,second)

console.log('done with this task')
console.log('startint the next one')
