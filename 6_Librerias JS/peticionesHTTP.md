Ahora que ya sabes cómo encender tu propio servidor, el siguiente gran paso es entender cómo se comunican las aplicaciones en la web.

---

# Guía Básica: Peticiones HTTP e Insomnia para Principiantes

### 1. ¿Qué son las Peticiones HTTP y para qué sirven?

**HTTP** (HyperText Transfer Protocol) es el idioma o el conjunto de reglas que usan las computadoras para hablar entre sí a través de Internet.

Cuando navegas por internet, todo funciona mediante un modelo llamado **Cliente - Servidor**:

* **El Cliente:** Eres tú (tu navegador web, tu aplicación móvil, etc.).
* **El Servidor:** Es la computadora remota que tiene guardada la información (las fotos de Instagram, los videos de YouTube o tu código de Express).

Una **Petición HTTP** (HTTP Request) es el mensaje que el *Cliente* le envía al *Servidor* para pedirle algo. Cuando el servidor recibe la petición, la procesa y le devuelve un mensaje al cliente llamado **Respuesta HTTP** (HTTP Response).

* **La analogía de la vida real:** Imagina que vas a un restaurante. Tú eres el **Cliente** y el mesero es el medio de comunicación.
1. Miras el menú y haces un **pedido** (Petición HTTP): *"Por favor, tráeme una hamburguesa"*.
2. El mesero lleva la orden a la cocina (**Servidor**), donde preparan la comida.
3. El mesero regresa y te entrega el plato (**Respuesta HTTP**).



---

### 2. Los 4 "Verbos" o Métodos HTTP más importantes

Cuando haces una petición, debes especificar qué acción quieres realizar. Para ello se usan métodos (también llamados verbos HTTP). Los 4 básicos que debes conocer son:

1. **`GET` (Obtener / Leer):** Se usa cuando solo quieres pedirle datos al servidor para verlos. (Ejemplo: Cuando entras a un perfil de Instagram para ver las fotos).
2. **`POST` (Crear / Enviar):** Se usa cuando quieres enviarle datos nuevos al servidor para que los guarde. (Ejemplo: Cuando te registras en una página y envías tu correo y contraseña nuevos).
3. **`PUT` (Actualizar / Modificar):** Se usa cuando quieres cambiar datos que ya existen en el servidor. (Ejemplo: Cuando editas tu foto de perfil o cambias tu nombre de usuario).
4. **`DELETE` (Eliminar):** Se usa cuando quieres borrar algo del servidor. (Ejemplo: Cuando le das clic a "Eliminar publicación").

---

### 3. ¿Qué es Insomnia y para qué sirve?

Cuando estabas probando tu servidor Express en la guía anterior, entraste a tu navegador web (Chrome/Firefox) y escribiste `http://localhost:3000`.

Los navegadores web son muy buenos haciendo peticiones de tipo **`GET`** (para leer páginas), pero **no pueden hacer peticiones `POST`, `PUT` o `DELETE` directamente desde la barra de direcciones**. Para probar esos otros métodos normalmente tendrías que programar un formulario en HTML y usar JavaScript complejo en el Front-end.

Aquí es donde entra **Insomnia**.

**Insomnia** es una aplicación de escritorio diseñada especialmente para los desarrolladores backend. Sirve como un "navegador web de pruebas". Te permite simular de forma gráfica y con unos pocos clics cualquier tipo de petición HTTP (`GET`, `POST`, `PUT`, `DELETE`) hacia tu servidor, enviando datos ficticios y viendo inmediatamente qué te responde el servidor sin necesidad de haber creado una página web bonita todavía.

* **La analogía:** Imagina que estás construyendo un auto (tu servidor). No vas a esperar a armar toda la carrocería, los asientos y la pintura (el diseño visual o Front-end) solo para probar si el motor enciende. Insomnia es como un banco de pruebas que conectas directamente al motor para ver si funciona bien por dentro.

---

### 4. Ejercicio Práctico en JavaScript (Node.js + Express)

Vamos a actualizar el servidor que creamos en la guía anterior para que acepte dos tipos de peticiones: una para **leer** (`GET`) y otra para **recibir datos** (`POST`).

1. Abre tu archivo **`app.js`** en Visual Studio Code.
2. Borra lo que tenías y reemplázalo con este código (mira los comentarios explicativos):

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// IMPORTANTE: Esta línea le enseña a tu servidor a entender datos en formato JSON 
// cuando alguien se los envíe a través de una petición POST.
app.use(express.json());

// 1. PETICIÓN GET: Al entrar a la raíz ('/')
app.get('/', (req, res) => {
    res.send('¡Hola! Estás haciendo una petición GET (leyendo datos).');
});

// 2. PETICIÓN POST: Al enviar datos a la ruta ('/nuevo-usuario')
app.post('/nuevo-usuario', (req, res) => {
    // Los datos que envía el cliente llegan guardados en 'req.body'
    const datosRecibidos = req.body;

    console.log('Datos que llegaron al servidor:', datosRecibidos);

    // Le respondemos al cliente confirmando que recibimos sus datos
    res.json({
        mensaje: "¡Petición POST exitosa! Datos guardados en el servidor.",
        usuarioCreado: datosRecibidos
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});

```

3. Guarda el archivo (`Ctrl + S`).
4. Ve a tu terminal y enciende el servidor con: `node app.js`

---

### 5. ¿Cómo verificarlo usando Insomnia?

1. Descarga e instala **Insomnia** (es gratis desde su página oficial `insomnia.rest`).
2. Abre la aplicación.
3. Crea una nueva petición (usualmente dándole clic al botón **"+"** o **"New HTTP Request"**).
4. **Probar el GET:**
* En la barra de direcciones de Insomnia escribe: `http://localhost:3000/`
* Asegúrate de que a la izquierda de la URL diga **`GET`**.
* Presiona el botón **"Send"**.
* *Resultado:* En el panel de la derecha verás el texto: *"¡Hola! Estás haciendo una petición GET..."*


5. **Probar el POST (Enviar datos):**
* Crea otra petición o cambia el botón de la izquierda de `GET` a **`POST`**.
* Cambia la URL a: `http://localhost:3000/nuevo-usuario`
* Justo debajo de la URL, busca una pestaña que dice **"Body"**, dale clic y selecciona **"JSON"**.
* En el cuadro de texto que aparece, escribe un texto en formato JSON simulando un usuario (recuerda usar comillas dobles):
```json
{
  "nombre": "Carlos",
  "edad": 22
}

```


* Presiona el botón **"Send"**.
* *Resultado:* En la derecha verás la respuesta en formato JSON que programamos en JavaScript confirmando que los datos llegaron con éxito, y si miras la terminal de Visual Studio Code verás que el servidor imprimió el nombre y la edad.