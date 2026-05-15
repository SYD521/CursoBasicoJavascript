var user = "Alejo"

var miObjeto = {
    //clave : valor
    nombre : "Jose Daniel",
    edad : 39,
    importante : true,
    texto : `Usuario: ${user}`,
    miFuncion : (a, b) => a + b,
    otroObjeto : { //estos objetos tambien pueden ser declarados fuera de este objeto
        nombre : "Roxanna",
        edad : 16
    },
    fecha : new Date() // objetos integrados de JS
}
console.log(miObjeto)

// para acceder al valor de una clave
console.log(miObjeto.nombre)
console.log(miObjeto.edad)
console.log(miObjeto.importante)
console.log(miObjeto.texto)
console.log(miObjeto.miFuncion(4, 8))
console.log(miObjeto.otroObjeto)
console.log(miObjeto.otroObjeto.nombre)
console.log(miObjeto.otroObjeto.edad)
console.log(miObjeto.fecha.getFullYear()) // metodo del objeto integrado de JS que devuelve al anio actual

// desestructuracion de un objeto
var {nombre} = miObjeto
console.log(nombre)

// desglosamiento de un objeto
var otraFuncion = ({texto}, {otroObjeto}) => {
    console.log(otroObjeto)
    console.log(texto)
}
otraFuncion(miObjeto, miObjeto)
