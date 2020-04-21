// prettier-ignore
function jurosSimples(kInicial, txJuros, tempo) {
  console.log(
    "O montante a juros simples é igual a: R$ " +
      (kInicial + (kInicial * txJuros * tempo)).toFixed(2).toString().replace(".", ",")
  )
}
//prettier-ignore
function jurosCompostos(kInicial, txJuros, tempo) {
  console.log(
    //prettier-ignore
    "O montante a juros compostos é igual a: R$ " +
      (kInicial * (1 + txJuros) ** tempo).toLocaleString("pt-BR", {style: "currency",currency: "BRL",})
  )
        

}

jurosSimples(1000, 0.1, 12)
jurosCompostos(1000, 0.1, 12)

//var number = 102300.99
// prettier-ignore
//console.log(number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))



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