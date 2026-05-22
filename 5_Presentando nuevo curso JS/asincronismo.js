// EJERCICIOS BASICOS PARA ENTENDER LA LÓGICA
// Vamos a ver cómo se comporta el código con ejemplos sencillos utilizando setTimeout,
// que es una función nativa de JavaScript para simular una tarea asíncrona (un temporizador).
// NOTA IMPORTANTE: Para ver el resultado de cada ejercicio, comentar los demas.

// Ejercicio 1: El engaño del tiempo
// ¿En qué orden crees que aparecerán estos mensajes en la consola?

console.log("1. Inicio del código");

setTimeout(() => {
    console.log("2. Comida lista (Pasaron 2 segundos)");
}, 2000); // 2000 milisegundos = 2 segundos

console.log("3. Fin del código");

// Resultado en la consola:

// 1. Inicio del código

// 3. Fin del código

// 2. Comida lista (Pasaron 2 segundos)

// ------------------------------------------------------
// Ejercicio 2: El temporizador en CERO (El truco mental)
// Este ejercicio suele confundir a muchos principiantes. ¿Qué pasa si ponemos el temporizador en 0 segundos?

console.log("Hola");

setTimeout(() => {
    console.log("Mundo Asíncrono");
}, 0); // ¡Cero milisegundos!

console.log("Adiós");

// Resultado en la consola:
// 1. Hola
// 2. Adiós
// 3. Mundo Asíncrono

// ------------------------------------------------------
// Ejercicio 3: Combinando con un Array (Caso práctico)
// Imagina que tienes una lista de alumnos y quieres simular que estás enviando sus notas
// a un servidor en internet (lo cual toma un poco de tiempo).
// OJO aqui vamos a usar las funciones normales, no las de flecha

const alumnos = ["Carlos", "Ana", "Luis"];

console.log("--- Iniciando proceso de subida ---");

alumnos.forEach(function(alumno) {
    // Simulamos que subir cada alumno a internet tarda 1 segundo
    setTimeout(function() {
        console.log("Nota enviada con éxito a: " + alumno);
    }, 1000);
});

console.log("--- El código síncrono ha terminado ---");

// Resultado en la consola:

// 1. --- Iniciando proceso de subida ---
// 2. --- El código síncrono ha terminado ---
// 3. (1 segundo después, aparecen todos juntos):
// Nota enviada con éxito a: Carlos
// Nota enviada con éxito a: Ana
// Nota enviada con éxito a: Luis