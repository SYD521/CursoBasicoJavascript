var nombre = 'Alejo'
var edad = 25

console.log('Mi nombre es: ' + nombre + ' y tengo ' + edad + ' años')
// mejor manera (interpolacion de texto) con comillas invertidas
console.log(`Mi nombre es: ${nombre} y tengo ${edad} años`)

// Metodos de string
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())
console.log(nombre.length)

// crear variables ayudandonos de los metodos
var nombreMayus = nombre.toUpperCase()
console.log(nombreMayus)

// si queremos saber todos los metodos de string, podemos consultar en la doc de Mozilla