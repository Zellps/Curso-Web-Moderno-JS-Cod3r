const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}  //isso não é mais necessário, mas permite mudar o atributo em questão
const obj2 = {a, b, c}  //jeito mais prático

console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 10

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() {                     //forma nova de adicionar uma função
        //...
    }
}

console.log(obj5)