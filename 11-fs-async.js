const {readFile,writeFile} = require('fs')

console.log('start')
 readFile('./Contents/First.txt','utf8',(err,result) =>{
   if(err){
    console.log(err)
   }
   const first = result
   readFile('./Contents/Second.txt','utf8',(err,result) =>{
    if (err){
        console.log(err)
    }
    const second = result

    writeFile('./Contents/result-async.txt',`hello the result:${first},${second} `,(err,result) =>{
        if(err){
            console.log(err)
        }
        console.log('done with this task')
    })
   })
 })

 console.log('starting the next task')