/**
document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "contacto"
}


document.addEventListener('click', function() {
    console.log("hola mundo desde eventListener");
    document.getElementById("demo").innerHTML = "contacto"
});
*/

document.getElementById('boton').addEventListener('click', function() {
    console.log("hola mundo desde eventListener");
    document.getElementById("demo").innerHTML = "contacto"
});