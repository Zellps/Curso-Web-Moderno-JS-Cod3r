function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this*/, 1000)  //esse 1000 representa 1000 milisegundos representa quanto tempo leva entre cada execução.
}

new Pessoa