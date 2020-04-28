console.log('01)', '1' == 1) // == igual leva em conta o valor
console.log('2)', '1' === 1) // === estritamente igual leva em conta o tipo também
console.log('3)', '3' != 3)
console.log('4)', '3' !== 3)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('9)', d1 === d2) // nesses 2 casos dá False pq está comparando locais na memória
console.log('10)', d1 == d2)
console.log('11)', d1, d2)
console.log('12)', d1.getTime() === d2.getTime()) // nesse caso dá verdadeiro pq está comparando as datas.
console.log('13)', undefined == null)
console.log('14)', undefined === null)