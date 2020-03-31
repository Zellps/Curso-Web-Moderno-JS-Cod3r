//lembrando, fuja do escopo global

var numero = 1
{
    var numero = 2 // no caso nao existe escopo de bloco com chaves...então  o var numero 2 sobrescreveu o var numero 1 já que estão no mesmo escopo
    console.log('dentro =', numero)
}
console.log('fora =', numero)


