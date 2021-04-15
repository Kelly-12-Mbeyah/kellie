const os = require('os')


//user's information
const user  = os.userInfo()
console.log(user)

//sytem uptime
console.log (`the system Uptime is ${os.uptime()} seconds `)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)