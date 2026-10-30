let formulario=document.getElementById("formTaller2");
let resultado=document.getElementById("resultado");

formulario.addEventListener("submit",taller2)

function taller2(){
    event.preventDefault()
    let nota=parseFloat(document.getElementById("nota").value);

    if(isNaN(nota)){
        document.getElementById("resultado").innerText="Ingrese la nota por favor."
        return;
    }
    if(nota<=0||nota>5){
        document.getElementById("resultado").innerText="Nota invalida."
        return;

    }
    let desempeño;
    let resultado="Aprobado";
    if(nota>4.5){
        desempeño="Excelente.."
    }else if(nota>4){
        desempeño="Bueno"
    }else if(nota>3){
        desempeño="Aceptable"
    }else{
        desempeño="Insuficiente"
        resultado="No aprobado"
    }
    document.getElementById("resultado").innerText=`${nota} - ${desempeño}: ${resultado}`
        
    //Validar que la nota no sea nula isNan
    //validar nota=0-5
    //desempeño

}