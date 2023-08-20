let txtBuscar = document.getElementById("txtBuscar")
txtBuscar.value = "0"

let txtEditar = document.getElementById("txtEditar")
txtEditar.value = "0"

let btnBuscar = document.getElementById("btnBuscar")
btnBuscar.addEventListener("click", refreshDetalles)

let btnEditar = document.getElementById("btnEditar")
btnEditar.addEventListener("click", editarVehiculo)

let btnCrear = document.getElementById("btnCrear")
btnCrear.addEventListener("click", crearVehiculo)

let btnBorrar = document.getElementById("btnBorrar")
btnBorrar.addEventListener("click", borrarVehiculo)

let btnReset = document.getElementById("btnReset")
btnReset.addEventListener("click", resetBD)

let contenidoDetalles = document.getElementById("contenidoDetalles")
txtEditar.innerText = ""

function verItemSimple (i){
    return "[" + arrayVehiculos[i].id + "] " + arrayVehiculos[i].marca + " - " + arrayVehiculos[i].modelo
}

function verItemDetallado (i){
    return "ID: [" + arrayVehiculos[i].id + "]\nMarca: " + arrayVehiculos[i].marca + "\nModelo: " +
    arrayVehiculos[i].modelo + "\nAño: " + arrayVehiculos[i].año + "\nColor: " + arrayVehiculos[i].color +
    "\nPrecio: " + arrayVehiculos[i].precio + "\nVendido: " + (arrayVehiculos[i].vendido ? "Si" : "No")
}

function refreshStock () {
    let showStock = document.getElementById("contenidoStock")
    showStock.innerText = ""
    for (let i = 0; i < arrayVehiculos.length; i++) {
        showStock.innerText = showStock.innerText + verItemSimple(i)+"\n\n"
    }
}

function refreshDetalles () {
    for (let i = 0; i < arrayVehiculos.length; i++) {
        if (txtBuscar.value-1 == i) {
            contenidoDetalles.innerText = verItemDetallado(txtBuscar.value-1)
            break;
        }else{
            contenidoDetalles.innerText = "El ID ingresado no coincide con ningún vehículo de la base de datos"
        }
    }
}

function editarVehiculo () {
    if (txtEditar.value > 0 && txtEditar.value <= arrayVehiculos.length) {
        Swal.fire({
            title: 'Confirmación editar',
            text: 'Desea marcar el vehículo con ID ['+ txtEditar.value +'] como vendido?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Next'
        })
        .then((editar) => {
            if (editar.isConfirmed) {
                arrayVehiculos[txtEditar.value-1].vendido = true
                txtBuscar.value = txtEditar.value
                refreshDetalles()
                refreshStock()
            }
            editarArrayLS()
        })
    }else{
        contenidoDetalles.innerText = "No se puede editar.\nEl ID ingresado no coincide con ningún vehículo de la base de datos."
    }
}

function crearVehiculo () {
    Swal.fire({
        title: 'Confirmación crear',
        text: "Seguro que desea cargar un nuevo vehículo a la base de datos?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    })
    .then((crear) => {
        if (crear.isConfirmed) {
            location.href = "../pages/crear.html"
        }
    })
}

function borrarVehiculo () {
    Swal.fire({
        title: 'Confirmación eliminar',
        text: "Si desea eliminar un vehículo de la base de datos, ingresé la ID y haga click en Borrar",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        input: 'text',
        preConfirm: (x) => {
            txtBuscar.value = x
            if (x != null && !x.isNaN &&  x > 0 && x <= arrayVehiculos.length){
                contenidoDetalles.innerText = "Se eliminó el vehículo que se encontraba en la posición "+ x +" de la base de datos.\nLos detalles eran:\n"+ verItemDetallado(x-1) +"\n\nSe reacomodaron los items restantes para actualizar la base de datos"
                arrayVehiculos.splice(x-1, 1)
                for (let i = 0; i < arrayVehiculos.length; i++) {
                    arrayVehiculos[i].id = i + 1
                }
                refreshStock()
                editarArrayLS()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se eliminó el vehículo que tenía la ID ['+ x +']',
                    showConfirmButton: false,
                    timer: 3000
                })
            }else{
                contenidoDetalles.innerText = "No se pudo eliminar.\nEl ID ingresado no coincide con ningún vehículo de la base de datos."
                txtBuscar.value = 0
            }
        }
    })
}

function resetBD () {
    Swal.fire({
        title: 'Confirmación restablecer',
        text: "Seguro que desea restablecer a dafault la base de datos?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    })
    .then((restablecer) => {
        if (restablecer.isConfirmed) {
            localStorage.clear()
            defaultArray()
            refreshStock()
            contenidoDetalles.innerText = "Se restableció la Base de Datos a los valores por defecto"
        }
    })
}

function leerArrayLS () {
    if (!localStorage.getItem("defaultArray")) {
        defaultArray()
        editarArrayLS ()
        refreshStock()
    }else {
        const arrayEnLS = JSON.parse(localStorage.getItem("defaultArray"))
        for (let i = 0; i < arrayEnLS.length; i++) {
            arrayVehiculos[i] = arrayEnLS[i]
        }
        refreshStock()
    }
}

function editarArrayLS () {
    const arrayEnJSON = JSON.stringify(arrayVehiculos);
    localStorage.setItem("defaultArray", arrayEnJSON);
}