const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//methods return system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const functioningOs = {
    name:os.type(),
    release:os.release(),
    totalMom:os.totalmem(),
    freeMom : os.freemem(),
}

console.log(functioningOs)