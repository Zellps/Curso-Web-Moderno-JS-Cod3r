const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log("Áprovado")
    } else {
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa')// cuidado JS por ser fracamente tipada deixa esse erro passar
imprimirResultado(true) // cuidado tbm