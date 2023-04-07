    let primerNumero 
    let segundoNumero 

function inicio (){

    let primerDigito = document.getElementById ("primerDigito").value
    let segundoDigito = document.getElementById ("segundoDigito").value

    let primerNumero = primerDigito
    let segundoNumero = segundoDigito
    alert("Estos son tus cifras: " + primerNumero + " y " + segundoNumero)

    let inputSuma = document.getElementById("suma")
    let inputResta = document.getElementById("resta")
    let inputMultiplicacion = document.getElementById("multiplicacion")
    let inputDivision = document.getElementById("division")

if (inputSuma.checked){
    alert("Tu sumaras " + primerNumero + " mas " + segundoNumero)
    alert("El resultado aparecera debajo del boton Realizar")
    let resultado = primerNumero + segundoNumero
    operacionSuma (primerNumero, segundoNumero, resultado)

}
else if (inputResta.checked){
    alert("Tu restaras " + primerNumero + " menos " + segundoNumero)
    alert("El resultado aparecera debajo del boton Realizar")
    let resultado = primerNumero - segundoNumero
    operacionResta(primerNumero, segundoNumero, resultado)


}
else if (inputMultiplicacion.checked){
    alert("Tu multiplicaras " + primerNumero + " por " + segundoNumero)
    alert("El resultado aparecera debajo del boton Realizar")
    operacionMultiplicacion(primerNumero, segundoNumero, resultado)
    
}
else if (inputDivision.checked){
    alert("Tu dividiras " + primerNumero + " dividido entre " + segundoNumero)
    alert("El resultado aparecera debajo del boton Realizar")
    operacionDivision(primerNumero, segundoNumero, resultado)
    
}
else {
    alert("Necesitas una operacion. Se reiniciara la pagina.")
    reiniciar()

}

}

function operacionSuma (primerNumero, segundoNumero, resultado){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")

    parrafo.innerHTML = primerNumero + " + " + segundoNumero + " = " + resultado 

    sectionMensajes.appendChild(parrafo)

}
function operacionResta(primerNumero, segundoNumero, resultado){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")

    parrafo.innerHTML = primerNumero + " - " + segundoNumero + " = " + resultado

    sectionMensajes.appendChild(parrafo)

}
function operacionMultiplicacion(primerNumero, segundoNumero, resultado){


}
function operacionDivision(primerNumero, segundoNumero, resultado){


}
function reiniciar(){
    location.reload()

}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")



}