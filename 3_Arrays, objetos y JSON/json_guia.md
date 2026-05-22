### 1. ¿Qué es JSON?

**JSON** significa *JavaScript Object Notation* (Notación de Objetos de JavaScript).

Para entenderlo de forma muy básica: **JSON es simplemente un formato de texto plano que sirve para guardar y compartir datos de manera organizada.** No es un lenguaje de programación, es solo una forma de escribir texto para que tanto los humanos como las computadoras puedan entenderlo fácilmente.

**La analogía:** Imagina que quieres enviarle a un amigo la lista de compras del supermercado. En lugar de escribir un párrafo desordenado, usas una lista con formato claro:

* Producto: Manzanas -> Cantidad: 5.
JSON es exactamente eso, pero adaptado para que los sistemas web se comuniquen.

Un JSON se ve de la siguiente manera:

```json
{
  "nombre": "Carlos",
  "edad": 22,
  "esEstudiante": true,
  "habilidades": ["HTML", "CSS", "JavaScript"]
}

```

**Reglas básicas de oro en JSON:**

1. Todo va encerrado entre llaves `{ }`.
2. Los datos se guardan en parejas de **"clave": "valor"** (por ejemplo, `"nombre"` es la clave y `"Carlos"` es el valor).
3. Las claves **siempre** llevan comillas dobles `""`.
4. Los datos se separan con comas `,` (excepto el último de la lista).

---

### 2. ¿Por qué es tan importante en el desarrollo web?

En el desarrollo web moderno, las aplicaciones están divididas. Por un lado tienes el **Front-end** (lo que el usuario ve en el navegador, como HTML/CSS) y por el otro el **Back-end** (el servidor y la base de datos donde se guarda todo).

JSON es importante porque funciona como el **idioma universal** o el "paquete de mensajería" que usan el Front-end y el Back-end para hablar entre sí:

* **Para conectar aplicaciones:** Cuando entras a una app de clima, el servidor de la app le pide los datos de temperatura a un servidor meteorológico mundial. Ese servidor responde enviando un archivo **JSON** con las temperaturas actuales. Tu navegador recibe ese texto JSON, lo lee y lo dibuja bonito en tu pantalla.
* **Es liviano:** Al ser solo texto puro, viaja de un lado a otro por internet de forma extremadamente rápida.
* **Independiente:** Aunque nació de JavaScript, hoy en día **cualquier** lenguaje de programación (Python, PHP, Java, etc.) sabe leer y crear JSON.

---

### 3. ¿Cómo usar JSON en JavaScript?

Cuando estás programando en JavaScript, vas a necesitar hacer dos cosas principales con JSON:

1. Convertir un texto JSON que recibes de internet en algo que JavaScript entienda (un Objeto).
2. Convertir tus datos de JavaScript en texto JSON para poder enviarlos a un servidor.

Para esto, JavaScript incluye una herramienta nativa llamada `JSON` con dos funciones mágicas:

#### A. Recibir un JSON y usarlo (`JSON.parse()`)

Imagina que un servidor te envía los datos de un usuario en formato de texto JSON. Para poder acceder a ellos con JavaScript, usamos `JSON.parse()`.

```javascript
// Este es un texto que simula un JSON recibido de internet
let textoJSON = '{"nombre": "Ana", "edad": 25}';

// Convertimos ese texto en un Objeto de JavaScript
let usuario = JSON.parse(textoJSON);

// ¡Ahora ya podemos usarlo en nuestro código!
console.log(usuario.nombre); // Imprime: Ana
console.log(usuario.edad);   // Imprime: 25

```

#### B. Crear un JSON para enviarlo (`JSON.stringify()`)

Imagina que el usuario llenó un formulario en tu web y quieres guardar sus datos enviándolos al servidor. Primero debes convertir tu objeto de JavaScript en un texto JSON usando `JSON.stringify()`.

```javascript
// Tenemos un objeto de JavaScript común y corriente
let miCarrito = {
  producto: "Laptop",
  precio: 800,
  cantidad: 1
};

// Lo convertimos a una cadena de texto JSON
let carritoEnJSON = JSON.stringify(miCarrito);

// Ahora la variable 'carritoEnJSON' contiene el texto: '{"producto":"Laptop","precio":800,"cantidad":1}'
console.log(carritoEnJSON); 
// Ya está listo para ser enviado a través de internet a cualquier servidor.

```

### Resumen para llevar a casa:

* **¿Qué es?** Texto organizado para guardar datos.
* **¿Para qué sirve?** Para transportar información entre el servidor y tu página web de forma rápida.
* **En JavaScript:** Usas `JSON.parse()` para **leer** un JSON y `JSON.stringify()` para **crear** un texto JSON.