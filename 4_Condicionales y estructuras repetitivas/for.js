// Imprimir un mensaje "i" veces
for(i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Hola " + i + " vez")
    }else {
        console.log("Hola " + i + " veces")
    }
}

// Utilizar FOR con arrays
var miArray = ["Hola", 2020, "Adiós"]

for(let index = 0; index < miArray.length; index++) {
    const element = miArray[index]
    console.log(element)
}

// Utilizar FOR con objetos
var persona1 = {
    nombre : "Ciapfa",
    edad : 2
}

var persona2 = {
    nombre : "Alejo",
    edad : 24
}

var persona3 = {
    nombre : "Adrian",
    edad : 30
}

var personas = [persona1, persona2, persona3]

for(let index = 0; index < personas.length; index++) {
    if(personas[index].edad >= 20) {
        break; //aqui se detiene el ciclo si las personas son mayores o iguales a 20 anios 
    }
    const element2 = personas[index].nombre
    console.log(element2)
}

// uso del metodo forEach
personas.forEach(element => console.log(element.edad))

miArray.forEach((element, i) => {
    console.log(i)
    console.log(element)
})

personas.forEach(element => {
    console.log(element.nombre)
    
})