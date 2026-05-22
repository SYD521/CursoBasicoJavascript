Entrar al mundo del desarrollo Backend (el lado del servidor) es una excelente decisión.

---

# Guía Básica: Creando tu primer servidor web con Node.js y Express

Para entender qué estamos haciendo, primero veamos de forma muy sencilla qué papel cumple cada herramienta.

### 1. ¿Qué es Node.js?

Normalmente, JavaScript es un lenguaje que vive y se ejecuta únicamente dentro del navegador web (como Google Chrome, Edge o Brave) para darle movimiento a las páginas.
**Node.js** es un programa que extrae a JavaScript del navegador y te permite ejecutarlo directamente en tu computadora. Gracias a Node.js, ahora podemos usar JavaScript para crear programas de escritorio, automatizar tareas y, lo más importante, **crear servidores web** que procesen datos.

* **La analogía:** Imagina que JavaScript es un chef que solo podía cocinar dentro de un crucero (el navegador). Node.js es como construirle un restaurante en tierra firme (tu computadora) para que trabaje libremente.

### 2. ¿Qué es Express?

Crear un servidor web usando únicamente Node.js puro requiere escribir muchas líneas de código complejas para gestionar cosas básicas (como responder cuando alguien entra a una URL específica).
**Express** es un *framework* (una librería o caja de herramientas organizada) que se instala sobre Node.js. Su único objetivo es facilitarte la vida, permitiéndote crear servidores web de forma rápida, limpia y con muy pocas líneas de código.

* **La analogía:** Si Node.js es la cocina del restaurante, Express es un asistente de cocina de primer nivel que ya tiene los ingredientes picados y listos para que preparar los platos sea mucho más fácil.

---

### 3. Comandos para crear el proyecto paso a paso

Para este tutorial, utilizaremos la terminal o consola de comandos (puedes usar la terminal integrada de Visual Studio Code).

#### Paso 1: Instalar Node.js (Si no lo tienes)

Antes de ejecutar comandos, debes tener Node.js instalado en tu computadora. Puedes descargarlo e instalarlo de su página oficial (`nodejs.org`).

#### Paso 2: Crear la carpeta de tu proyecto

Abre tu terminal y escribe los siguientes comandos uno por uno (presionando Enter al final de cada uno):

```bash
# 1. Crea una carpeta llamada mi-primer-servidor
mkdir mi-primer-servidor

# 2. Entra a la carpeta que acabas de crear
cd mi-primer-servidor

```

#### Paso 3: Inicializar el proyecto con NPM

NPM (Node Package Manager) es el gestor que viene con Node.js para descargar herramientas. Ejecuta el siguiente comando para decirle a Node que esta carpeta será un proyecto:

```bash
npm init -y

```

*¿Qué hace esto?* Crea un archivo llamado `package.json`. Este archivo es como la "cédula de identidad" de tu proyecto, donde se anotará el nombre del proyecto y las librerías que descargues.

#### Paso 4: Instalar Express

Ahora descargaremos Express dentro de nuestro proyecto con el siguiente comando:

```bash
npm install express

```

*¿Qué hace esto?* Descarga todo el código de Express y crea una carpeta llamada `node_modules` (donde se guardan las librerías) y modifica tu archivo `package.json` para avisar que ahora dependes de Express.

---

### 4. Ejercicio Práctico: Escribiendo el código del Servidor

1. Abre la carpeta `mi-primer-servidor` en tu editor de código favorito (como Visual Studio Code).
2. Crea un archivo nuevo y llámalo exactamente: **`app.js`**
3. Copia y pega el siguiente código dentro de `app.js`. He colocado comentarios explicativos línea por línea para que entiendas qué hace:

```javascript
// 1. Llamamos a la librería Express que instalamos antes
const express = require('express');

// 2. Creamos una aplicación de Express (nuestro servidor en miniatura)
const app = express();

// 3. Definimos el "puerto" o la puerta de entrada digital en nuestra computadora
const PORT = 3000;

// 4. Creamos una "Ruta" (Route). 
// Le decimos al servidor: "Cuando alguien entre a la página principal ('/'), respóndele un mensaje"
app.get('/', (req, res) => {
    // res.send se encarga de enviar la respuesta al navegador
    res.send('¡Hola mundo! Mi primer servidor con Node.js y Express está funcionando correctamente. 🚀');
});

// 5. Le pedimos al servidor que se encienda y se quede "escuchando" peticiones en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor encendido con éxito en: http://localhost:${PORT}`);
});

```

---

### 5. ¿Cómo verificar que está funcionando?

¡Llegó el momento de la verdad! Sigue estos pasos para probar tu creación:

1. Ve a tu terminal (asegúrate de seguir dentro de la carpeta `mi-primer-servidor`).
2. Ejecuta tu archivo con Node.js escribiendo el siguiente comando:
```bash
node app.js

```


3. Si todo está bien, verás en la pantalla el mensaje informativo de tu código:
`Servidor encendido con éxito en: http://localhost:3000`
4. Abre tu navegador web favorito (Chrome, Firefox, etc.).
5. En la barra de direcciones de arriba (donde escribes google.com), escribe lo siguiente y presiona Enter:
**`http://localhost:3000`**
6. **Resultado:** Deberías ver en tu pantalla blanca el texto:
*"¡Hola mundo! Mi primer servidor con Node.js y Express está funcionando correctamente. 🚀"*

*Nota para cuando termines de practicar:* Tu terminal se quedará "bloqueada" porque el servidor está encendido trabajando. Si quieres apagar el servidor, simplemente ve a la terminal y presiona las teclas **`Ctrl + C`**.