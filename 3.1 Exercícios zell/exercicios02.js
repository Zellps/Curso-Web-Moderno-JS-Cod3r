function classificarTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA == ladoB && ladoB == ladoC) {
    console.log("Este triângulo é Equilátero meu fi!")
  } else if (ladoA != ladoB && ladoA != ladoC) {
    console.log("Este triângulo é Escaleno doidin!")
  } else {
    console.log(" Ora, ora, parece que este triângulo é Isósceles!")
  }
}

classificarTriangulo(2, 2, 2)
classificarTriangulo(3, 2, 1)
classificarTriangulo(4, 4, 1)
classificarTriangulo(12, 9, 12)
