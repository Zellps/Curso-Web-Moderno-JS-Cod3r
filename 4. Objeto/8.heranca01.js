const ferrari = {
  modelo: "F40",
  velMax: 324,
}

const volvo = {
  modelo: "V40",
  velMax: 200,
}

console.log(ferrari.__proto__) //o protótipo (objeto pais é buscado atravpes do __proto__
// o resultado disso será um objeto que existe mas está vazio

console.log(ferrari.__proto__ === Object.prototype) //por padrão um objeto criado aponta para object.prototype... por isso o resultado desse log é TRUE.
console.log(volvo.__proto__ === Object.prototype)

//o protótótipo do oject.prototype é null... ou seja... a hierarquia é Object.prototype > ferrari.prototype > ferrari
console.log(Object.prototype.__proto__ === null)
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
