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