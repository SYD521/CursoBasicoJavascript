var variable = true

if(variable) {
    console.log("Verdadero")
}else {
    console.log("Falso")
}

// ejemplo con else if
var edad = 18

if(edad >= 18 && edad <= 30) {
    console.log("Joven adulto")
}else if(edad < 18) {
    console.log("Nino o adolescente")
}else if(edad > 30 && edad <= 55) {
    console.log("Adulto")
}else if(edad > 55) {
    console.log("Anciano")
}else {
    console.log("Indefinido")
}   