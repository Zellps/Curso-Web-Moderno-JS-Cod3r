//usando array dentro da função
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) //atribuir apenas o mínimo
console.log(rand([, 10])) //atribuir apenas o máximo
console.log(rand([]))  //vais assumir os valores padrão 0 e 1000
// console.log(rand()) - dará erro por ficar undefined