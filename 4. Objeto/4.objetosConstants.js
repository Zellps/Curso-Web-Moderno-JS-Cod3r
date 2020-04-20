// pessoa -> 123 -> {...}  (pessoa aponta para um endereço de memória por exe.. no 123.... e nesse endereço aponta-se para o objeto)
const pessoa = {nome: 'João'}  //o objeto pode ser modificado mas não a constante pessoa
pessoa.nome = 'Pedro' // mudar o atributo nome de pessoa é possível.
console.log(pessoa)

//pessoa -> 456 ->{...} pessoa não aponta para o objeto que está em 456, o que dará erro
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) //congela o objeto pessoa
pessoa.nome = 'Maria' //essa tentativa de mudar o nome será ignorada
pessoa.end = 'Rua abc' // também não pode adicionar um atributo
console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze ({nome: 'João'})  //cria o objeto já freezado
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)