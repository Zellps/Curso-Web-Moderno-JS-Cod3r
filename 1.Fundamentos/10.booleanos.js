let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

isAtivo = 0
console.log(!!isAtivo)

isAtivo = 3
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // string com um espaço já não conta como vazia
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // pipeline || serve para o operador "ou"

let nome = ''
console.log(nome || 'Desconhecido')
// como o nome está vazio o log vai retornar 'desconhecido'