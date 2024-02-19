console.log("Hola Ch38")
// Funcion que da un saludo con alert
function saludo() {
    alert('¡Hola Ch38!');
}
/**
 * Pedir el nombre de la persona usando un Promt ()
 * Mostrar un saludo y nombre de la persona con alert()
 */
function enviarSaludoAPersona() {
    let message = prompt("Hola usuario dime tu nombre");
    alert(`Hola ${message}`);
}