function area(largura, altura) {
  const areacalc = largura * altura
  if (areacalc > 20) {
    console.log(`Valor acima do permitido: ${areacalc}m2.`)
  } else {
    return areacalc
  }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))
