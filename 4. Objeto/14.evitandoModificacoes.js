const produto = Object.preventExtensions({
    nome: "Qualquer", preço: 1.99, tag: "promoção"
})

// através do preventExtensions, não vai ser possível adicionar atributos ao objeto. Mas é possível excluir os que já tem.

produto.nome = 'Borracha'  // mudar pode
produto.descricao = 'Borracha escolar branca' // não vai pode adicionar
delete produto.tag //isso é possível
console.log(produto)


// Object.seal - não dá pra adicionar nem excluir novos atributos no objeto... mas dá pra modificar.
const pessoa = { nome: "zell", idade: 37 }
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não vai rolar
delete pessoa.nome // não vai rolar
pessoa.idade = 20 // vai rolar
console.log(pessoa)


// Object.freez = selado + valores constantes