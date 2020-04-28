const moduloA = require('../../1.moduloA') // pode botar minusculo q o mac e win reconhecem
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require ('./pastaC')//não precisa referenciar o index q está na pasta C

//const http = require('http')
//http.createServer((req, res) => {
 //   res.write('Bom dia FDP')
 //   res.end()
//}).listen(8080)