var number = 102300.99
// prettier-ignore
console.log(number.toLocaleString("pt-Br", { style: "currency", currency: "BRL" }))

number2 = 100000.88
const format = { style: "currency", currency: "BRL" }
console.log(number.toLocaleString(("pt-BR", format)))
const hasICU = typeof Intl === "object"
console.log(hasICU)

const f1 = Intl.NumberFormat("br")
f1.format(number2)
console.log(
  number2.toLocaleString("pt-Br", { style: "currency", currency: "BRL" })
)

