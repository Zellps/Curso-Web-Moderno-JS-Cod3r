// factory é uma função q retorna um objeto

const prod1 = {
    nome: "...",
    preco: 45
}

// no lugar de criar vários prods...  prod1 prod2 prod3...

function criarPessoa() {
    return {
        nome: "Ana"
        sobrenome: "Silva"
    }
}


console.log(criarPessoa())
