console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Bola" // ou obj1['nome'] = 'Bola2' essa notacao dah mais flexibilidade, mas nao eh muito interessante
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome //this.nome torna publica
  this.exec = function() {
    console.log("Exec...")
  }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec() // nao precisa console.log pois jah tem lah em cima
