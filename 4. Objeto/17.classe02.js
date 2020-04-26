class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome  //o objeto que for instanciado terá o atributo sobrenome
    }
}

//isso criará uma relação de protótipo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)  //isso vai chamar o constructor de avo passando o sobrenome
        this.profissao = profissao // o objeto q for instaciado terá o atributo profissão
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') //como não passou a profissão, vai assumir o do pai
    }
}

const filho = new Filho
console.log(filho)