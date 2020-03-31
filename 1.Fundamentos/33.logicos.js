function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // "ou" usa o pipe 2 vezes ||
    const comprarTV50 = trabalho1 && trabalho2 // "e" é representado por &&
    //const comprarTV32 = !!(trabalho1 ˆ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete  //operador unário de negação
    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false)
)