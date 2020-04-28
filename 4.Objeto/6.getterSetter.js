const sequencia = {
    _valor: 1,    // convenção pra mostrar q esssa é uma variável que é pretendida ser acessada apenas internamente dentro desse objeto sequência. não é uma obrigação q impeça q ela seja alterada.
    get valor() {return this._valor++},  // get e set são funções que dentro desssas funções os valores são acessados. serve pra algum tipo de validação antes de devolver o valor da variável
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
