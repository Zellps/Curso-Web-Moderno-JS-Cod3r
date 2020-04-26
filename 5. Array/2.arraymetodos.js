const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//como foi usado o const não se pode atribuir mais nada ao array pilotos, mas o conteúdo pode ser alterado

//.pop() remove o último item do array.
pilotos.pop(pilotos)
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

//o .shift() é igual ao pop, mas tira o elemento da primeira posição
pilotos.shift()  // vai remover o Vettel
console.log(pilotos)

// .unshift() é o contrário do método .shift(), ou seja. adiciona um membro no início do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice() pode adicionar e remover elementos


// adicionar elementos usando splice
pilotos.splice(2, 0, "botas", "massa")
console.log(pilotos)

//remover usando splice
pilotos.splice(3, 1)
console.log(pilotos)

//.slice() retorna um novo array  partir do indice determinado
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)


const algunsPilotos2 = pilotos.slice(1, 4) //vai do indice 1 ao 4 (excluindo o 4)
console.log(algunsPilotos2)
