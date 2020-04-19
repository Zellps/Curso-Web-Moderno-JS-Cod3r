function dinheiro(valor) {
  console.log(`R$ ${valor.toFixed(2).toString().replace(".", ",")}`)
}

dinheiro(0.1 + 0.25)
