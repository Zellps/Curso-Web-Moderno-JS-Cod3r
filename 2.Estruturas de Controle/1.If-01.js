function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('Eh verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("") //string vazia
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ") //string com um espaco
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([]) // array vazio
seForVerdadeEuFalo([1, 2] // array
seForVerdadeEuFalo({}) // objeto vazio 
