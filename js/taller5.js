let formulario=document.getElementById("formTaller5");
let resultado=document.getElementById("resultado");

formulario.addEventListener("submit",calcular)

function calcular(){
    event.preventDefault()
    resultado.classList.add("exito");
    let numero1Texto = document.getElementById("numero1").value;
    let numero2Texto = document.getElementById("numero2").value;
    let numero1 = Number(numero1Texto);
    let numero2 = Number(numero2Texto);
    let operacion = document.getElementById("operacion").value;

    if (numero1Texto === "" || numero2Texto === "") {
        document.getElementById("resultado").innerText="Escribe los dos números.";
        return;
    }
    if (operacion === "") {
        document.getElementById("resultado").innerText="Selecciona una operación.";
        return;
    }
    if (operacion === "division" && numero2 === 0) {
        document.getElementById("resultado").innerText="No es posible dividir entre cero.";
        return;
    }
    let simbolo;
    switch (operacion) {
    case "suma":
        resultadoOperacion = numero1 + numero2;
        simbolo = "+";
        break;

    case "resta":
        resultadoOperacion = numero1 - numero2;
        simbolo = "-";
        break;

    case "multiplicacion":
        resultadoOperacion = numero1 * numero2;
        simbolo = "×";
        break;

    case "division":
        resultadoOperacion = numero1 / numero2;
        simbolo = "÷";
        break;
    }
    document.getElementById("resultado").innerText = `${numero1} ${simbolo} ${numero2} = ${resultadoOperacion}`;
    
}