function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)  //esse 1000 representa 1000 milisegundos representa quanto tempo leva entre cada execução. - Se usar .bind(this) tbm daria certo no lugar do const self = this
}

new Pessoa


// outra forma
function Pessoa2() {
    this.idade2 = 0


    setInterval(function () {
        this.idade2++
        console.log(this.idade2)
    }.bind(this), 3000)  //esse 3000 representa 1000 milisegundos representa quanto tempo leva entre cada execução. - Se usar .bind(this) tbm daria certo no lugar do const self = this
}

new Pessoa