// destructuring em arrays

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //1o elemento do array eh vazio, o 2o elemento é outro array com 1 elmento vazio e o 2o é "nota"
console.log(nota)

