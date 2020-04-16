class Pessoa {
    constructor(nome) {
        this.nome = nome   // colocando this o objeto pode ser acessado fora dessa função
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)  //usa-se o this pra chamar o objeto.
    }
}

const p1 = new Pessoa ('João')
p1.falar()


//outra forma com a função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Zell')
p2.falar()