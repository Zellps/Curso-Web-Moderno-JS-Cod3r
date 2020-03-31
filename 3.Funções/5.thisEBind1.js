const pessoa = {
    saudacao: "Bom Dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()  // conflito entre paradigmas funcional e OO - resultado será undefined

const falarDePessoa = pessoa.falar.bind(pessoa)  // agora é possível chamar a função falar()
falarDePessoa()

