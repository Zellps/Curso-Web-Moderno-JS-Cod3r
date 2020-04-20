//cadeia de protótipos (prototype chain) - vou criar filho, pai e avô
Object.prototype.attr0 = "Z"
const avo = { attr1: "A" }
const pai = { __proto__: avo, attr2: "B" } // o __proto__: xxxx vai definir o protótipo do objeto em questão
const filho = { __proto__: pai, attr3: "C" }

// o filho tem o protótipo pai, o pai tem o protótipo avô e o avô tem o protótipo Object.prototype (por default)

console.log(filho.attr1) // a busca vai ser feita no filho, como ele não tem attr1, a busca sobe para o pai, como também não tem, sobe para o avô e lá encontra o attr1 que é A.

console.log(filho.attr0) // a resposta será Z poi vai subir até o object.prototype para encontrar o attr0.

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  },
}

const ferrari = {
  modelo: "F40",
  velMax: 324, //com o carro sendo protótipo de ferrari, a velMax da ferrari vai sombrar a velMax do carro...isso se chama shadowing
}

const volvo = {
  modelo: "V40",
  //do mesmo jeito q usa-se .this pra referenciar o objeto atual, usa-se super pra referencia o protótipo
  status() {
    return `${this.modelo}: ${super.status()}` // o super vai chamar o status do protótipo
  },
}

Object.setPrototypeOf(ferrari, carro) // aqui eu defino q ferrari vai ter carro como protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) //ferrari vai imprimir só os atributos q estão de fato declarados lá
console.log(volvo) //já o volvo vai imprimir tbm a função q vem de carro. status()

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
