let formulario=document.getElementById("formTaller4");
let resultado=document.getElementById("resultado");

formulario.addEventListener("submit",validarRegistro)

function validarRegistro(){
    event.preventDefault()
    resultado.classList.add("exito");

    let Nombre=document.getElementById("nombre").value;
    let EdadTexto = document.getElementById("edad").value;
    let Edad = Number(EdadTexto);
    let Correo=document.getElementById("email").value;
    let Contraseña=document.getElementById("contraseña").value;
    let confirmarContraseña=document.getElementById("confirmarContraseña").value;
    if(Nombre.trim() === ""){
        document.getElementById("resultado").innerText=`Escribe tu nombre.`;
        return;

    }if(EdadTexto===""){
        document.getElementById("resultado").innerText="Escribe tu edad.";
        return;
    }else if (isNaN(Edad)){
        document.getElementById("resultado").innerText="Escribe tu edad.";
        return;
    }if (!Number.isInteger(Edad) || Edad < 18 || Edad > 100) {
        document.getElementById("resultado").innerText="La edad debe ser un número entero entre 18 y 100.";
        return;
    }
    if (!Correo.includes("@")|| !Correo.includes(".")) {
        document.getElementById("resultado").innerText="Escribe un correo válido.";
        return;
    }
    if(Contraseña.trim() === ""){
        document.getElementById("resultado").innerText=`Escribe tu contraseña.`;
        return;

    }
    if(Contraseña!==confirmarContraseña){
        document.getElementById("resultado").innerText="Las contraseñas no coinciden.";
        return;  
    }else{
        document.getElementById("resultado").innerText=`Registro exitoso.Bienvenido(a),${Nombre} `;
    }

}