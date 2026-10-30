let formulario=document.getElementById("formTaller1");
let resultado=document.getElementById("resultado");

formulario.addEventListener("submit",par_impar)

function par_impar(){
    event.preventDefault()
    let numero=Number(document.getElementById("numero").value);

    if(numero===0||isNaN(numero)){
        resultado.innerText="Escribe un numero.";
        return;
    }
    if(!Number.isInteger(numero)){
        resultado.innerText=`El numero debe de ser entero..`
        return;
    }
    if(numero % 2==0){
        resultado.innerText=`El numero ${numero} es par.`
    }
    else{
        resultado.innerText=`El numero ${numero} es impar.`

    }
}