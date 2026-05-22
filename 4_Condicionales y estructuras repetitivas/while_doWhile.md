### 1. El ciclo `while` (Mientras...)

El ciclo `while` evalúa primero si la condición es verdadera. Si lo es, entra a ejecutar el código. Si desde el principio la condición es falsa, **nunca se ejecutará** lo que está adentro.

**Estructura básica:**

```javascript
while (condicion) {
    // Código que se repite
    // Modificación de la variable de control (para no crear un ciclo infinito)
}

```

#### Ejercicio básico con un Array y Condicional (`if`)

Imagina que tienes una lista (array) de números y quieres revisar uno por uno hasta encontrar el primer número negativo.

```javascript
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

```

---

### 2. El ciclo `do while` (Hacer... Mientras)

A diferencia del anterior, el ciclo `do while` **primero ejecuta el código una vez**, y después revisa si la condición es verdadera para ver si continúa repitiéndose. Esto garantiza que el código de adentro se ejecute **al menos una vez**, sin importar si la condición es falsa desde el inicio.

**Estructura básica:**

```javascript
do {
    // Código que se ejecuta al menos una vez y luego se repite
    // Modificación de la variable de control
} while (condicion);

```

#### Ejercicio básico con Objetos y Condicional (`if`)

Imagina que estamos simulando un juego muy simple donde un personaje ataca a un monstruo (representado como un objeto) repetidas veces hasta que su vida llegue a 0. Queremos que al menos le pegue una vez.

```javascript
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

```

---

### ¿Cuándo es recomendable utilizar uno u otro?

La regla de oro para decidir es hacerte la siguiente pregunta: **"¿Necesito que esto se ejecute obligatoriamente al menos una vez?"**

* **Usa `while`:** Cuando es posible que el ciclo no deba ejecutarse nunca si la condición inicial no se cumple.
* *Ejemplo real:* Leer los mensajes de una bandeja de entrada. Si la bandeja está vacía (condición: `mensajes > 0` es falsa), no necesitas procesar ni mostrar ningún mensaje. El ciclo simplemente se salta.


* **Usa `do while`:** Cuando necesitas realizar la acción primero y luego validar si se repite.
* *Ejemplo real:* Un menú de opciones en una consola o juego. Primero le muestras las opciones al usuario en pantalla (`do`), capturas lo que digita, y luego verificas (`while`) si eligió "Salir". Si no eligió salir, el menú se vuelve a mostrar.



### 💡 Un consejo de amigo para novatos:

Cuando programes un `while` o un `do while`, asegúrate **siempre** de que la variable que evalúas cambie dentro del ciclo (como el `i++` o el `monstruo.vida - danoAtaque`). Si olvidas modificarla, la condición siempre será verdadera y tu computadora se congelará en un **ciclo infinito**. Si te llega a pasar, ¡no te asustes! Solo cierra la terminal o la pestaña del navegador.