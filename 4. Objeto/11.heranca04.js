function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto() //qual será o protótipo desse objeto criado a partir da function MeuObjeto()
const obj2 = new MeuObjeto()

console.log(obj1.__proto__ === obj2.__proto__)  // vai dar true
console.log(MeuObjeto.prototype === obj1.__proto__) // true tbm.

MeuObjeto.prototype.nome = "Anônimo"  // todo objeto criado a partir de meu objeto vão ter esse atributo nome.

MeuObjeto.prototype.falar = function () { console.log(`My name is ${this.nome}`) }


obj1.falar()

obj2.nome = "Zell"
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype

obj3.nome = "OBJ03"
obj3.falar()

//resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //true
console.log(MeuObjeto.__proto__ == Function.prototype)  // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
console.log(Object.prototype.__proto__ === undefined) //false