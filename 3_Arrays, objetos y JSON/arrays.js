var permitido = "Usuario permitido"
var miFuncion = acceso => acceso
// ejemplo de un objeto, que tiene arrays dentro, y dentro de estos mas objetos
var persona = {
    nombre : "Pepe",
    miAutomovil : [
        pintura = {
            marca : "Marca",
            precio : 20000,
            color : "verde"
        },
        vendedor = {
            nombre : "Ciapfa",
            edad : 2,
            ayudante : {
                nombre : "Julio"
            }
        }
    ]
}


var miArray = ["Ciapfa", 2020, 34.9, true, ["Otro Array", "Array", 7900], miFuncion(permitido), persona]

// acceder al elemento del array el numero decimal
console.log(miArray[2])

// acceder al elemento del array, al que es otro array al segundo elemento de este
console.log(miArray[4][1])

// acceder a la funcion dentro del array
console.log(miArray[5])

// acceder al objeto dentro del array, a un elemento especifico del objeto
console.log(miArray[6].nombre)

// acceder al elemento dentro del objeto, que esta dentro del array
console.log(miArray[6].miAutomovil[0].color)
console.log(miArray[6].miAutomovil[1].ayudante.nombre)