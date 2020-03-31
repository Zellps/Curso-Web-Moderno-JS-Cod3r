const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado'//condição ? resultado se true : resultado se falso

//ou poderia fazer igualmente
/*
const resultado = nota => {
    return nota >=7 ? 'aprovado' : 'reprovado'
}
*/

console.log(resultado(8.1))
console.log(resultado(6.1))