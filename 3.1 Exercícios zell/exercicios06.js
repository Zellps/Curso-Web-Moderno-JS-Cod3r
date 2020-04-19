function jurosSimples(kInicial, txJuros, tempo) {
  console.log(
    " o montante a juros simples é igual a: R$ " +
      (kInicial * txJuros * tempo).toFixed(2).toString().replace(".", ",")
  )
}

function jurosCompostos(kInicial, txJuros, tempo) {
  console.log(
    "O montante a juros compostos é igual a: R$ " +
      (kInicial * (1 + txJuros) ** tempo)
        .toFixed(2)
        .toString()
        .replace(".", ",")
  )
}

jurosSimples(1000, 0.1, 12)
jurosCompostos(1000, 0.1, 12)
