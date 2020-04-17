// a diferença entre o call e o apply é a forma como vc passa os parâmetros na hora de chamar estes 2 métodos.


function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "notebook",
    preco: 1000,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 10000, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "$")) // na call os parâmetros são passados diretamente.
console.log(getPreco.apply(carro, [0.17, "$"])) // apply usa array para passar os parâmetros
console.log(getPreco.apply(global, [0.18, "US$"]))
