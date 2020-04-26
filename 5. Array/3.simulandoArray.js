const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)

//toString vai simular a impressão no console como um array
Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])  //como os atributos do quaseArray são numéricos, vc pode acessar os elementos do objeto de forma numérica como se fosse um array.


