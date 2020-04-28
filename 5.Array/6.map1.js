// map é um For com propósito. serve pra fazer uma transformação no array. serve pra mapear um array pra um outro array de mesmo tamanho, mas com dados transformados.
const nums = [1, 2, 3, 4, 5]

//For com propósito
//tentar fazer um array novo com o dobro dos valores do original
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

//usando maps sucessivos
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado2)