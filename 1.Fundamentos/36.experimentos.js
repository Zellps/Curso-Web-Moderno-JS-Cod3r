let a = 3  // qd usa let a variavel fica local e nao global
global.b = 123
this.c = 456
this.d = false
this.e = "teste"

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(this.d)
console.log(module.exports === this) // no node cada arquivo eh um modulo
console.log(module.exports)

// module.exports = {e: 456, f: false, e: "teste"}

abc = 3 // criando uma variavel maluca, sem var ou let.... nao fazer isso
console.log(global.abc)