const fs = require('fs')

console.log('INICIO')


fs.readFile('1.txt', (err, contenido1) => {
  console.log(contenido1.toString())

  fs.readFile('2.txt', (err, contenido2) => {
    console.log(contenido2.toString())

    fs.readFile('3.txt', (err, contenido3) => {
      console.log(contenido3.toString())


      console.log('FIN')
    })
  })
})
