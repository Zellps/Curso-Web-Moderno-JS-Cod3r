function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

//essas aula1 e aula2 tem como protótipo a função aula
const aula1 = new Aula('Bem-vindo', 123)
const aula2 = new Aula('Sarabada', 456)

console.log(aula1, aula2)

//simulando o new
function novo(f, ...params) {  // os ... são spread rest... servem para concatenar um grupo de parâmetros inseridos
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, "bienvenido", 123)
const aula4 = novo(Aula, "hasta la vista", 123)
console.log(aula3, aula4)