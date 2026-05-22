Estos dos métodos son herramientas muy poderosas que se aplican exclusivamente a las listas (llamadas **Arrays** o arreglos) en JavaScript.

Cuando estás empezando, es normal verlos y pensar que son confusos, pero una vez entiendes para qué sirve cada uno usando analogías cotidianas, se vuelven pan comido. ¡Vamos paso a paso!

---

### 1. El Método `.map()` (Transformar la lista)

#### ¿Qué es y por qué lo utilizamos?

Imagina que vas al supermercado con una bandeja que tiene **4 manzanas crudas**. Tu objetivo es convertirlas todas en **manzanas horneadas**. Al final, seguirás teniendo **4 cosas** en tu bandeja, pero cada una de ellas habrá cambiado de estado.

Eso es exactamente `.map()`. Lo utilizamos cuando tenemos un Array con elementos y queremos **transformar cada uno** de ellos aplicando la misma regla, obteniendo como resultado un **NUEVO Array con la misma cantidad de elementos**, pero modificados. El Array original no se destruye ni cambia.

#### Ejercicio Básico con `.map()`

Imagina que tienes una lista de precios en números y necesitas crear una nueva lista donde todos los precios tengan el signo de dólar `$` al principio para mostrárselo al usuario.

```javascript
// 1. Nuestra lista original (Array de números)
const precios = [10, 20, 30, 45];

// 2. Usamos .map() para transformar cada número
// Dentro de los paréntesis creamos una pequeña función que procesa cada "precio" uno por uno.
const preciosConDolar = precios.map(function(precio) {
    return "$" + precio; // Convertimos el número en texto con el signo $
});

// 3. Vemos los resultados en la consola
console.log("Original:", precios);       // Resultado: [10, 20, 30, 45] (No cambió)
console.log("Transformado:", preciosConDolar); // Resultado: ["$10", "$20", "$30", "$45"]

```

*¿Viste?* Tenías 4 números y obtuviste 4 textos formateados. La cantidad de elementos es exactamente la misma.

---

### 2. El Método `.reduce()` (Acumular o reducir la lista)

#### ¿Qué es y por qué lo utilizamos?

Imagina la misma bandeja con **4 manzanas**. Pero esta vez no quieres hornearlas por separado, sino meterlas todas a una licuadora para hacer **un solo vaso de jugo de manzana**. Pasaste de tener muchos elementos a tener **un único resultado acumulado**.

Eso es `.reduce()`. Lo utilizamos cuando queremos tomar todos los elementos de un Array y **combinarlos o procesarlos juntos para obtener un solo valor final** (que puede ser un número total, un solo texto largo, o un objeto acumulado).

#### Ejercicio Básico con `.reduce()`

El ejemplo más fácil del mundo para entender `reduce` es sumar todos los números de una lista para obtener el total de una factura.

Para usar `reduce`, necesitamos dos cosas principales dentro de su función:

1. Un **acumulador**: Es como una alcancía donde se va guardando el resultado parcial.
2. El **elemento actual**: El número de la lista que estamos revisando en ese milisegundo.
3. Un **valor inicial**: El número con el que empieza nuestra alcancía (usualmente `0`).

```javascript
// 1. Nuestra lista de gastos
const gastos = [5, 15, 20, 10];

// 2. Usamos .reduce() para sumar todo en un solo total
const totalFactura = gastos.reduce(function(acumulador, gastoActual) {
    return acumulador + gastoActual; // Sumamos el gasto de turno a lo que ya teníamos guardado
}, 0); // <-- Este "0" es el valor inicial del acumulador (la alcancía empieza vacía)

// 3. Vemos el resultado
console.log("El total de tus gastos es:", totalFactura); 
// Resultado de la suma: 5 + 15 + 20 + 10 = 50

```

---

### Uniendo ambos conceptos en un ejercicio de la vida real (Avanzando un paso)

Como ya sabes qué son los objetos y los arrays, hagamos un ejercicio donde combinamos condicionales y estructuras un poco más dinámicas.

Imagina que tienes un carrito de compras con **productos**. Cada producto tiene un nombre, un precio y si tiene descuento o no. Queremos hacer dos tareas:

1. Aplicar un descuento del 50% **solo** a los productos que tengan `descuento: true` (Usaremos `.map()` porque queremos modificar la lista).
2. Calcular cuánto debe pagar el cliente en total por todos sus productos ya modificados (Usaremos `.reduce()`).

```javascript
// Nuestro Array de Objetos (El carrito de compras)
const carrito = [
    { nombre: "Camiseta", precio: 20, tieneDescuento: false },
    { nombre: "Zapatos", precio: 80, tieneDescuento: true }, // Este debería bajar a 40
    { nombre: "Pantalón", precio: 40, tieneDescuento: true }  // Este debería bajar a 20
];

// PASO 1: Aplicar descuentos usando .map() y una estructura condicional (if)
const carritoConDescuentos = carrito.map(function(producto) {
    // Si el producto tiene descuento, modificamos su precio
    if (producto.tieneDescuento === true) {
        return {
            nombre: producto.nombre,
            precio: producto.precio / 2, // Mitad de precio
            tieneDescuento: producto.tieneDescuento
        };
    } else {
        // Si no tiene descuento, lo devolvemos exactamente igual
        return producto; 
    }
});

console.log("Carrito Nuevo con Descuentos Aplicados:", carritoConDescuentos);
/* Resultado en consola:
[
  { nombre: "Camiseta", precio: 20, tieneDescuento: false },
  { nombre: "Zapatos", precio: 40, tieneDescuento: true },
  { nombre: "Pantalón", precio: 20, tieneDescuento: true }
]
*/

// PASO 2: Calcular el total final a pagar usando .reduce() sobre el carrito modificado
const totalAPagar = carritoConDescuentos.reduce(function(alcancia, productoActual) {
    return alcancia + productoActual.precio;
}, 0);

console.log("Monto final que el cliente debe pagar: $" + totalAPagar);
// Resultado: 20 + 40 + 20 = $80

```

### Resumen para llevar a casa:

* **¿Cuándo usar `.map()`?** Cuando quieras transformar una lista elemento por elemento. Entran 5 cosas, salen 5 cosas cambiadas.
* **¿Cuándo usar `.reduce()`?** Cuando quieras aplastar, sumar o combinar una lista para transformarla en **un único resultado final**. Entran muchas cosas, sale una sola cosa.