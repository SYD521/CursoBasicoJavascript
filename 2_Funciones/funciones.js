// Son un conjunto de sentencias que realizan una tarea
function saludo() {
    console.log("Hola a todos")
}

// funcion con parametro
function miSuma(a, b) {
    let resultado = a + b
    console.log(resultado)
}

// funcion con parametro y uso de return
function miSegundaSuma(a, b) {
    return a + b
}

// pasarle una funcion a una variable
var miTerceraSuma = function (a, b, c) {
    return a + b + c
}

saludo()
miSuma(4, 5)
console.log(miSegundaSuma(4, 5))
console.log(miTerceraSuma(4, 5, 11))

// pasarle variables a una funcion
var a2 = 4
var b2 = 8
var c2 = 9
console.log(miTerceraSuma(a2, b2, c2))