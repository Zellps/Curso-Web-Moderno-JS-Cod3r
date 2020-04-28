console.log(soma(3, 4)) // function declaration mesmo sendo feita depois é executada aqui. O mesmo não acontece com a function expression

// function declaration - mesmo antes de ser declarada ela já funciona
function soma(x, y) {
  return x + y
}

//function expression
const sub = function (x, y) {
  return x - y
}
console.log(sub(10, 11))
//named function expression (soma das 2 anteriores) - pouco usada
const mult = function mult(x, y) {
  return x * y
}
