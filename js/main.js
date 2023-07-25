
let boton = document.getElementById("start")
boton.addEventListener("click", startCode)
function startCode () {

    let verStock = prompt(("Bienvenido al simulador de ventas de vehículos\nDesea visualizar el stock? [Y/N]"))
    if (verStock != null && verStock.toUpperCase() == "Y"){
        alert("El stock actual es:\n\n"+stockDisponible()+"\n")
    }

    let verVendidos = prompt(("Desea ver los vehículos ya vendidos? [Y/N]"))
    if (verVendidos !=  null && verVendidos.toUpperCase() == "Y") {
        alert("Los vehículos vendidos son:\n"+yaVendidos())
    }

    let cargarNuevo = prompt(("Desea cargar un nuevo vehículo al stock? [Y/N]"))
    if (cargarNuevo !=  null && cargarNuevo.toUpperCase() == "Y") {
        let x = arrayVehiculos.length + 1
        let a = prompt("Ingrese la marca")
        let b = prompt("Ingrese el modelo")
        let c = prompt("Ingrese el color")
        let d = prompt("Ingrese el año de fabricación")
        let e = prompt("Ingrese el precio")
        const vehiculoNuevo = new Vehiculo(x, a, b, c, d, e, false)
        arrayVehiculos.push(vehiculoNuevo)
    }

    let eliminar = parseInt(prompt(("Desea eliminar un vehículo del stock?\nIngrese 0 si la respuesta es no, o un número correspondiente al id del item a eliminar")))
    if (eliminar > 0 && eliminar <= arrayVehiculos.length) {
        eliminarVehiculo(eliminar)
        alert("Se eliminó el vehículo con id: " + eliminar)
    }else{
        alert("No se eliminó ningún elemento")
    }

    let filtrarPrecio = prompt("Si desea filtrar los vehículos en la base de datos por precio ingrese el valor deseado [" + mayorPrecio() + "/" + menorPrecio() + "]")
    if (filtrarPrecio !=  null && parseInt(filtrarPrecio) > 0) {
        parseInt(filtrarPrecio)
        alert("Los vehículos que superan los $" + filtrarPrecio + " son:\n" + precioMayor(filtrarPrecio) + "\nY los que no superan ese precio son:\n" + precioMenor(filtrarPrecio))
    }

    let idVendido = prompt("Desea marcar un vehículo como vendido? Ingrese una id válida para proceder")
    if (idVendido != null && parseInt(idVendido) >= 0 && parseInt(idVendido) < arrayVehiculos.length){
        arrayVehiculos[idVendido-1].vendido = true
    }
    alert("El siguiente item se marcó como vendido:\n" + verItem(idVendido-1))

}

function verItem (i){
    return "[" + arrayVehiculos[i].id + "] " + arrayVehiculos[i].marca + " " + arrayVehiculos[i].modelo + " " + arrayVehiculos[i].color + " - Precio: " + arrayVehiculos[i].precio
}

function mayorPrecio (){
    let p = 0
    for (let i = 0; i < arrayVehiculos.length; i++) {
        if (arrayVehiculos[i].precio > p){
            p = arrayVehiculos[i].precio
        }
    }
    return p
}

function menorPrecio (){
    let p = 999999999
    for (let i = 0; i < arrayVehiculos.length; i++) {
        if (arrayVehiculos[i].precio < p){
            p = arrayVehiculos[i].precio
        }
    }
    return p
}

function precioMayor (n){
    let items = ""
    for (let i = 0; i < arrayVehiculos.length; i++) {
        if (arrayVehiculos[i].precio >= n){
            items = items + "[" + arrayVehiculos[i].id + "] " + arrayVehiculos[i].marca + " " + arrayVehiculos[i].modelo + " " + arrayVehiculos[i].color + " - Precio: " + arrayVehiculos[i].precio + "\n"
        }
    }
    return items
}

function precioMenor (n){
    let items = ""
    for (let i = 0; i < arrayVehiculos.length; i++) {
        if (arrayVehiculos[i].precio < n){
            items = items + "[" + arrayVehiculos[i].id + "] " + arrayVehiculos[i].marca + " " + arrayVehiculos[i].modelo + " " + arrayVehiculos[i].color + " - Precio: " + arrayVehiculos[i].precio + "\n"
        }
    }
    return items
}

function eliminarVehiculo(id){
    arrayVehiculos.splice(id-1, 1)
    for (let i = 0; i < arrayVehiculos.length; i++) {
        arrayVehiculos[i].id = i + 1
    }
}

function stockDisponible (){
    let items = ""
    for (let i = 0; i < arrayVehiculos.length; i++) {
        if (arrayVehiculos[i].vendido == false){
            items = items + verItem(i) + "\n"
        }
    }
    return items
}

function yaVendidos (){
    let items = ""
    for (let i = 0; i < arrayVehiculos.length; i++) {
        if (arrayVehiculos[i].vendido != false){
            items = items + "[" + arrayVehiculos[i].id + "] " + arrayVehiculos[i].marca + " " + arrayVehiculos[i].modelo + " " + arrayVehiculos[i].color + "\n"
        }
    }
    return items
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