function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 //atributo privado

    this.acelerar = function(){     //método público
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
            
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)