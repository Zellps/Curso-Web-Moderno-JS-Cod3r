console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//todos os 3 tem um atributo chamado .prototype... .pq toda função tem.

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())
console.log('Zells'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
