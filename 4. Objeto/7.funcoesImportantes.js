const pessoa = {
  nome: "Zell",
  idade: 37,
  peso: 86
}

console.log(Object.keys(pessoa)) // mostra as chaves do objeto
console.log(Object.values(pessoa)) // mostra os valores das chaves do objeto
console.log(Object.entries(pessoa)) // retorna as chaves e valores em forma de um array

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`) // retorna os dados do objeto
})

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`) // retorna os dados do objeto
})

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2019"
})

pessoa.dataNascimento = "01/01/2020"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // ela aparece aqui pq é "enumerable"

// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // assign pega todos os atributos dos objetos e joga dentro do objeto destino
// o a vai ser sobrescrito de 1 pra 4.

Object.freeze(obj) // com esse freeze o item c do objeto obj não vai ser alterado para 1234
obj.c = 1234
console.log(obj)
