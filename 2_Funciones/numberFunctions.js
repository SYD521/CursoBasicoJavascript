// METODOS O FUNCIONES NUMÉRICAS

// 1. Devolver true si el numero es integer
var numero = 50
var res = Number.isInteger(numero)
console.log(res)

// 2. convertir un numero a entero
var numero2 = 50.8768
var res2 = Number.parseInt(numero2)
console.log(res2)

// 3. cambiar el numero de decimales que queremos
var numero3 = 50.23425456
var res3 = Number.parseFloat(numero3).toFixed(2) //primero convertimos a float y despues aplicamos fixed
console.log(res3)
