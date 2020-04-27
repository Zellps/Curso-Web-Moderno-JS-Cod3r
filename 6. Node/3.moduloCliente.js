//essa vai ser a forma usada no curso para se exportar módulos
//esse módulo vai acessar os 2 módulos anteriores
const moduloA = require('./1.moduloA') // o ./ é pq se está referenciando um módulo que está dentro do sistema. por isso usa-se o caminho relativo
const moduloB = require('./2.moduloB')
//o que foi exportado nos módulos A e B ira para as constantes moduloA e B deste 3o documento.
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)



