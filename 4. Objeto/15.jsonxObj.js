//json é um formato de dados... é TEXTUAL... muito usado para interoperabilidade entre sistemas

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }



console.log(JSON.stringify(obj))  //a função vai ser excluída do json


//console.log(JSON.parse("{a: 1, b: 2, c:3 }")) vai dar erro pq todos os nomes dos atributos no json deve ficarm entre aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // isso vai gerar um objeto a partir de um texto json.

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {},  "e": []}')) // vai suportar strings, arrays, objetos