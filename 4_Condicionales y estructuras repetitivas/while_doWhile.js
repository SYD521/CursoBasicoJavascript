// WHILE EJERCICIO BASICO CON UN ARRAY Y CONDICIONAL
// Imagina que tienes una lista (array) de números y quieres revisar uno por uno hasta encontrar el primer número negativo.

// Variable tipo Array con una lista de números
let numeros = [5, 12, 8, -3, 7, 14];

let i = 0; // Esta variable 'i' será nuestro índice para recorrer el array (empezamos en la posición 0)
let encontrado = false; // Una variable booleana para saber si ya lo encontramos

// El ciclo se ejecutará "mientras" el índice sea menor al tamaño del array Y no hayamos encontrado el número
while (i < numeros.length && encontrado === false) {
    
    // Estructura condicional básica para revisar el número actual
    if (numeros[i] < 0) {
        console.log("¡Encontré un número negativo! Es el: " + numeros[i]);
        encontrado = true; // Cambiamos a true para que el ciclo "while" se detenga en la próxima vuelta
    } else {
        console.log("El número " + numeros[i] + " es positivo. Seguimos buscando...");
    }

    i++; // ¡MUY IMPORTANTE! Avanzamos a la siguiente posición del array (0, luego 1, luego 2...)
}

// DOWHILE EJERCICIO BASICO CON OBJETOS Y CONDICIONAL
// Imagina que estamos simulando un juego muy simple donde un personaje ataca a un monstruo 
// (representado como un objeto) repetidas veces hasta que su vida llegue a 0. Queremos que al menos le pegue una vez.

// Variable tipo Objeto que representa al monstruo
let monstruo = {
    nombre: "Goblinsito",
    vida: 25
};

let danoAtaque = 10; // Daño que hace nuestro personaje por golpe

console.log("¡Comienza la batalla contra " + monstruo.nombre + "!");

// El ciclo 'do' asegura que el ataque se realice al menos la primera vez
do {
    console.log("Le quedan " + monstruo.vida + " puntos de vida.");
    console.log("¡ZAS! Atacas al monstruo y le quitas " + danoAtaque + " de vida.");
    
    // Restamos el daño a la propiedad 'vida' del objeto
    monstruo.vida = monstruo.vida - danoAtaque;

    // Condicional para dar un mensaje especial si el monstruo ya cayó
    if (monstruo.vida <= 0) {
        console.log("¡El " + monstruo.nombre + " ha sido derrotado!");
    } else {
        console.log("El monstruo sigue en pie...");
    }
    
    console.log("-----------------------------------------");

} while (monstruo.vida > 0); // Se repite "mientras" la vida del monstruo sea mayor que 0