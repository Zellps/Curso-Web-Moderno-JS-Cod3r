console.log(typeof Array, typeof new Array, typeof [])

//forma válida mas não muito recomendada de criar um array.
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//forma literal de criação
aprovados2 = ['squall', 'zell', 'tifa']
console.log(aprovados2[0])
console.log(aprovados2[1])
console.log(aprovados2[2])
console.log(aprovados2[3])  // não vai dar erro... e sim undefined

//adicionar novo elemento no array
aprovados2[3] = 'Sephirot' // esse método é mais recomendado pra substituir elementos que já existem.
aprovados2.push('Barret')
console.log(aprovados2.length) //antes tinha 3 elementos, agora tem 5

//se adicionar um elemento na 10a posição. os intermediários passarão a existir com valor undefined (posição 4 a 8)
aprovados2[9] = 'Seifer'
console.log(aprovados2.length)
console.log(aprovados2[8] === undefined)
console.log(aprovados2)

//.sort() vai reordenar o array.
aprovados2.sort()
console.log(aprovados2)

//para deletar um item do array...
delete aprovados2[1] // isso vai remover o objeto e deixar undefined naquela posição

console.log(aprovados2)

// a função .splice() serve pra adicionar elementos num determinado índice, remover elementos de um array ou remover e adicionar ao mesmo tempo.
aprovados3 = ['chaves', 'quico', 'chiquinha']

//o primeiro 1 define a partir de qual posição no array. o segundo número diz quantos elementos serão apagados.
aprovados3.splice(1, 1)
console.log(aprovados3)

//colocar de volta
aprovados3.push('nhonho', 'quico', 'florinda')

//aqui abaixo além de exlcuir 2 elementos, entrarão os 2 novos. se usar 0 não vai excluir ninguém...só adicionar
aprovados3.splice(1, 0, 'madruga', 'barriga')

console.log(aprovados3)