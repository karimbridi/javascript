
//Insertar codigo

let boton = document.getElementById("start")
boton.addEventListener("click", startCode)
function startCode () {

    alert("Prueba mensaje")

}



/* alert("Bienvenido usuario a esta calculadora de numeros factoriales")
let factorial1 = Number(prompt("Ingresa el primer número entero"))
alert("El resultado de "+factorial1+"! es: "+resulFac(factorial1))
let factorial2 = Number(prompt("Ingresa el segundo número entero"))
alert("El resultado de "+factorial2+"! es: "+resulFac(factorial2))
let operacion = prompt("¿Qué operación desea realizar con "+factorial1+"! y "+factorial2+"! [+][-][*]?")
if (operacion == "+" || operacion == "-" || operacion == "*") {
    alert("El resultado de "+factorial1+"! "+operacion+" "+factorial2+"! es: "+op(operacion))
} else {
    alert("Ingresó una operación inválida")
}

function resulFac (factorial){
    if (factorial == 0 || factorial < 0) {
        return(0)
    } else {
        let x = 1
        for (let i = factorial; i > 0; i--) {
            x = x * i
        }
        return(x)
    }
}

function op (operador){
    switch (operador) {
        case "+":
            return resulFac(factorial1) + resulFac(factorial2);
        case "-":
            return resulFac(factorial1) - resulFac(factorial2);
        case "*":
            return resulFac(factorial1) * resulFac(factorial2);
    }
} */