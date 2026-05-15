var acceso = true

var accesoU = function (a) {
    return a
}

accesoU(acceso) == true ? console.log("Usuario permitido") : console.log("Usuario denegado")

// Como simplificar el codigo de arriba con arrowFunctions

// para funciones con un parametro
var acceso2 = true
var acceso2U = a => a //retorna un valor
acceso2U(acceso2) == true ? console.log("Usuario permitido") : console.log("Usuario denegado")

// para funciones sin parametros
var acceso3U = () => false //retorna false
acceso3U() == true ? console.log("Usuario permitido") : console.log("Usuario denegado")

// para funciones con mas de un parametro
var acceso3 = false
var usuario = "José"
var acceso4U = (a, n) => console.log(`Usuario ${n} Acceso ${a}`) // retorna esto en la consola
acceso4U(acceso3, usuario)

// para funciones que ejecuten mas de una linea de codigo
var acceso4U = (a, n) => {
    console.log(`Usuario ${n} en ejecución`)
    return a
}
acceso4U(acceso2, usuario) == true ? console.log("Usuario permitido") : console.log("Usuario denegado")





