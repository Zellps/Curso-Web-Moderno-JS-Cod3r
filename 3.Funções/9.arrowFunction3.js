comparaComThis = function (param) {
    console.log(this === param)
}
//this aponta para o global
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)



let comparaComThisArrow = param => console.log(this === param)  // não aponta para o global
comparaComThisArrow(global)

comparaComThisArrow(module.exports)  // aqui ele fica global novamente

comparaComThisArrow = comparaComThisArrow.bind(obj)  //a arrow function prevalece sobre o bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)  // aqui o module.exports mantém o this prevalecendo sobre a arrow function