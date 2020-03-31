{
    {
        {
            {
                var sera = 'será??'  //embora essa variável pareça estar dentro apenas desse bloco, ela está disponível fora dele tbm.
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 //qd definir a var dentro da função ela fica disponível apenas lá
    console.log(local)
}

teste()
console.log(local)  // esse var não irá aparecer fora da função


// evitar escrever variáveis com escopo global, pq se alterar a variável ela vai sobrescrever