// EJERCICIO BASICO CON .MAP()
//Imagina que tienes una lista de precios en números y necesitas crear una nueva lista 
// donde todos los precios tengan el signo de dólar $ al principio para mostrárselo al usuario.

// 1. Nuestra lista original (Array de números)
const precios = [10, 20, 30, 45];

// 2. Usamos .map() para transformar cada número
// Dentro de los paréntesis creamos una pequeña función que procesa cada "precio" uno por uno.
const preciosConDolar = precios.map(function(precio) {
    return "$" + precio; // Convertimos el número en texto con el signo $
});
// Lo mismo pero con función de flecha
const preciosConDolar2 = precios.map(precio => "$" + precio);

// 3. Vemos los resultados en la consola
console.log("Original:", precios);       // Resultado: [10, 20, 30, 45] (No cambió)
console.log("Transformado:", preciosConDolar); // Resultado: ["$10", "$20", "$30", "$45"]
console.log("Transformacion2:", preciosConDolar2); // Resultado: ["$10", "$20", "$30", "$45"]

// EJERCICIO BASICO CON .REDUCE()
// El ejemplo más fácil del mundo para entender reduce es sumar todos los números de una lista para obtener 
// el total de una factura.
// Para usar reduce, necesitamos dos cosas principales dentro de su función:
// 1. Un acumulador: Es como una alcancía donde se va guardando el resultado parcial.
// 2. El elemento actual: El número de la lista que estamos revisando en ese milisegundo.
// 3. Un valor inicial: El número con el que empieza nuestra alcancía (usualmente 0).

// 1. Nuestra lista de gastos
const gastos = [5, 15, 20, 10];

// 2. Usamos .reduce() para sumar todo en un solo total
const totalFactura = gastos.reduce(function(acumulador, gastoActual) {
    return acumulador + gastoActual; // Sumamos el gasto de turno a lo que ya teníamos guardado
}, 0); // <-- Este "0" es el valor inicial del acumulador (la alcancía empieza vacía)
// lo mismo pero usando funcion de flecha
const totalFactura2 = gastos.reduce((acumulador, gastoActual) => acumulador + gastoActual,0);

// 3. Vemos el resultado
console.log("El total de tus gastos es:", totalFactura); 
console.log("El total de tus gastos es:", totalFactura2);
// Resultado de la suma: 5 + 15 + 20 + 10 = 50

// UNIENDO AMBOS CONCEPTOS EN UN EJERCICIO DE LA VIDA REAL
// Imagina que tienes un carrito de compras con productos.
// Cada producto tiene un nombre, un precio y si tiene descuento o no. Queremos hacer dos tareas:
// 1. Aplicar un descuento del 50% solo a los productos que tengan descuento: true
//    (Usaremos .map() porque queremos modificar la lista).
// 2. Calcular cuánto debe pagar el cliente en total por todos sus productos ya modificados (Usaremos .reduce()).

// Nuestro Array de Objetos (El carrito de compras)
const carrito = [
    { nombre: "Camiseta", precio: 20, tieneDescuento: false },
    { nombre: "Zapatos", precio: 80, tieneDescuento: true }, // Este debería bajar a 40
    { nombre: "Pantalón", precio: 40, tieneDescuento: true }  // Este debería bajar a 20
];

// PASO 1: Aplicar descuentos usando .map() y una estructura condicional (if)
const carritoConDescuentos = carrito.map(producto => {
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
const totalAPagar = carritoConDescuentos.reduce((alcancia, productoActual) => alcancia + productoActual.precio, 0);

console.log("Monto final que el cliente debe pagar: $" + totalAPagar);
// Resultado: 20 + 40 + 20 = $80