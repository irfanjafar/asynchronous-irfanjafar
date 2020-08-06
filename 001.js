const fs = require('fs')

const async = () => new Promise((res,rej) =>{
  fs.readdir('/', (err, result) => {
    if (err) {
      throw new Error(err.message)
    }
    res(result)
  })
})

async().then(data => {
  console.log(data)
})