'use strict'

var datosFormulario = document.querySelector("#formulario");
datosFormulario.addEventListener('submit', function () {

    console.log("Evento submit capturado");

    var nombreElement = document.querySelector("#nombre");
    var nombre = nombreElement.value;
    var apellido = document.querySelector("#apellido").value;
    var correo = document.querySelector("#correo").value;
    var comentario = document.querySelector("#comentario").value;

    if(!isNaN(nombre.trim())){
        nombreElement.style="border: 2px solid red";
            alert("El nombre no es valido")
            return false;
        }
        if (nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no debe estar vacio")
            return false;
        }

        if (apellido.trim() == null || apellido.trim().length == 0){
            alert("El apellido no es valido")
            return false;
        }

        if (correo.trim() == null || correo.trim().length == 0){
            alert("El correo no es valido")
            return false;
        }
        datosFormulario.reset()
        
        console.log('Su nombre es: ' + nombre, apellido, 'Su correo electronico es: ' + correo, 'su comentario fue: ' + comentario);

    })

       
        // IsInteger
    // if (Number.isInteger(val)) {
    //     // It is indeed a number
    // }

    // // isNaN (is not a number)
    // if (isNaN(val)) {
