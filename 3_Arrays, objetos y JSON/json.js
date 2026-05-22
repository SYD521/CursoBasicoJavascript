// es un formato para el intercambio de datos y un subconjunto de los objetos
// NOTA: revisar la teoría mas detallada en. uestro archivo markdown

// --- Recibir un JSON y usarlo ---

// Este es un texto que simula un JSON recibido de internet
let textoJSON = '{"nombre": "Ana", "edad": 25}';

// Convertimos ese texto en un Objeto de JavaScript
let usuario = JSON.parse(textoJSON);

// ¡Ahora ya podemos usarlo en nuestro código!
console.log(usuario.nombre); // Imprime: Ana
console.log(usuario.edad);   // Imprime: 25


// --- Crear un JSON para enviarlo ---

// Tenemos un objeto en Javascript comun y corriente
var miObjeto = {
    nombre: "Ciapfa"
}
// convertir nuestro objeto en tipo JSON
console.log(JSON.stringify(miObjeto))