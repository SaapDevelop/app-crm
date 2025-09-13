/*
    getElementById
    querySelector
    querySelectorAll -> Lo mas optimo (permite seleccionar cualquiera)

*/

let inputs = document.querySelectorAll(".formulario__entrada")

let arregloInputs = [...inputs] /*->Expansion iterable (spread operator)*/
console.log(inputs)
console.log(arregloInputs)

arregloInputs.map((input)=> {
    console.log(input)
})

/*inputs.map(function(){})*/