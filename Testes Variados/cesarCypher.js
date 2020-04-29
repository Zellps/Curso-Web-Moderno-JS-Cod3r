function rot3(str) {
    var solved = ''
    for (var i = 0; i < str.length; i++) {
        var asciiNum = str[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 86) {
            solved += String.fromCharCode(asciiNum + 4)
        }
        //pra cifra não passar do caractere Z e ao invés de subir, descer de Z para baixo. 
        else if (asciiNum >= 87 && asciiNum <= 90) {
            solved += String.fromCharCode(asciiNum - 4)
        } else {
            solved += str[i]
        }
    }   

    console.log(solved.toLowerCase())
}

rot3("Z.E.L.L.")


// How charCodeAt works
//var str = "HELLO WORLD";
//var n = str.charCodeAt(3);
//console.log(n)