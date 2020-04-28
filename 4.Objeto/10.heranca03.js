const pai = { nome: "Pedro", corCabelo: "preto" }

const filha1 = Object.create(pai) // aqui será criado um objeto novo com o protótipo sendo o objeto pai

filha1.nome = "Ana"
console.log(filha1.corCabelo)

filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumberable: true },
})

console.log(filha2.nome)
filha2.nome = "carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // mostra as chaves do objeto
console.log(Object.keys(filha2))

for (let key in filha2) {
  filha2.hasOwnProperty(key) ? console.log(key) : console.log("Por herança")
}
