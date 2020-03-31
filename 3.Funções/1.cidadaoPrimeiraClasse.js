// Função em JS é First-Class Object (citizens)
// Higher-order function

/*
    A função é tratada no JS como um dado. E sendo assim ela pode ser passada como um parâmetro,
    retornar a função como resposta de outra função.
*/

// criar de forma literal
function fun1() {}

//armazenar em uma variável
const fun2 = function() {}

// Armazenar em um array
const array = [
  function(a, b) {
    return a + b
  },
  fun1,
  fun2
]

// pra executar a função
console.log(array[0](2, 3)) //item 0 do array com parâmetros 2 e 3

// Armazenar os atributos em um objeto
const obj = {}
obj.falar = function() {
  return "opa"
}
console.log(obj.falar())

// passar função com parâmetro
function run(fun) {
  fun()
}

run(function() {
  console.log("Executando...")
})

//uma função pode retornar ou conter uma função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4) // chamar diretamente
const cincoMais = soma(2, 3)
cincoMais(4)
