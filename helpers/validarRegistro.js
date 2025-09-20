/*
    getElementById
    querySelector
    querySelectorAll -> Lo mas optimo (permite seleccionar cualquiera)

*/
import {expresiones} from './expresiones.js';

let inputs = document.querySelectorAll(".formulario__entrada")

let arregloInputs = [...inputs] /*->Expansion iterable (spread operator)*/

arregloInputs.map((input)=> {
    input.addEventListener("keyup", (e)=>{
        switch (e.target.id){
            case "nombre":
                if(expresiones.texto.test(e.target.value)){
                    e.target.style.borderColor = "green" /*->En ambos casos deberia funcionar sin problema*/
                }else {
                    document.getElementById("nombre").style.borderColor = "red"
                }
                break;
            case "apellido":
                if(expresiones.texto.test(e.target.value)){
                    e.target.classList.add ("correcto")
                    e.target.classList.remove("incorrecto")
                }else {
                    document.getElementById("apellido").classList.add ("incorrecto")
                    document.getElementById("apellido").classList.remove ("correcto")
                }
                break;
            case "documento":
                if(expresiones.numero.test(e.target.value)){
                    e.target.classList.add ("correcto")
                    e.target.classList.remove("incorrecto")
                }else {
                    document.getElementById("documento").classList.add ("incorrecto")
                    document.getElementById("documento").classList.remove ("correcto")
                }
                break;
        }
    })
})

