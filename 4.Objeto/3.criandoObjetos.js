//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object()
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desconto) {
  // preço e desconto ficarão encapsulados
  this.nome = nome // this. torna a variável "nome" pública (não ficará encapsulada no objeto)
  //esse método ficará público tbm
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto) // preço e desconto não ficam disponíveis para fora do objeto
  }
}

const p1 = new Produto("caneta", 8, 0.1)
const p2 = new Produto("notebook", 1000, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    },
  }
}

const f1 = criarFuncionario("zell", 10000, 2)
const f2 = criarFuncionario("squall", 20000, 5)
//prettier-ignore
console.log(  f1.getSalario().toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
                f2.getSalario().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
)

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
filha.idade = 35
console.log(filha)

// uma função famosa que retorna Objeto - ela transforma uma função num objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
