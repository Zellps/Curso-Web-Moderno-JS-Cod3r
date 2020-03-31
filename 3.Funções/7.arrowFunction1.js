let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // return imnplícito
console.log(dobro(Math.PI))

//----------------

let ola = function () {
    return "olá"
}

ola = () => "olá"  //ou usa os parênteses ou underline
ola = _ => 'Olá'

console.log(ola())

