const soma = function (x, y) {
    return x + y

}

const imprimirResultado = function (a,b, operação = soma) {
    console.log(operação(a, b))
}

imprimirResultado (3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){
    return x - y
})

imprimirResultado (3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log("yey")
    }
}
pessoa.falar()

//segunda forma de usar uma função anônomia sem usar a palavra function

const pessoa2 = {
    gritar() {
        console.log("YAY")
    }
}
pessoa2.gritar()

