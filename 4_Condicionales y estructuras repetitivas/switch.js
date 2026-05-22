// Recibe una expresion, y de acuerdo a ella ejecuta un caso

var opcion = 1

switch (opcion) {
    case 1:
        console.log("Menu de usuario")
        break;
    case 2:
        console.log("Menu administrativo")
        break;
    case 3:
        console.log("Configuración")
        break;
    case "Nuevo menu":
        let miNuevoMenu = "Salida"
        console.log(miNuevoMenu)
        break;
    default:
        console.log("Break")
        break;
}