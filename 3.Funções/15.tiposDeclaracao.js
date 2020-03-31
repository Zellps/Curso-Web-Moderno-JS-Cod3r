console.log(soma(3, 4)) // function declaration mesmo sendo feita depois é executada aqui

// function declaration - mesmo antes de ser declarada ela já funciona
function soma(x, y) {
    return x + y
}

//function expression
const sub = function(x, y) {
    return x - y
}

//named function expression (soma das 2 anteriores) - pouco usada
const mult = function mult(x, y) {
    return x * y
}