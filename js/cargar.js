let btnCrearNuevo = document.getElementById("btnCrearNuevo")
btnCrearNuevo.addEventListener("click", crearNuevo)

let btnVolver = document.getElementById("btnVolver")
btnVolver.addEventListener("click", volverHome)

let txtNewMarca = document.getElementById("txtNewMarca")
let txtNewModelo = document.getElementById("txtNewModelo")
let txtNewColor = document.getElementById("txtNewColor")
let txtNewAño = document.getElementById("txtNewAño")
let txtNewPrecio = document.getElementById("txtNewPrecio")

function crearNuevo () {
    leerArrayLS()
    let x = arrayVehiculos.length + 1
    if (txtNewMarca.value != "") {
        let a = txtNewMarca.value
        if (txtNewModelo.value != "") {
            let b = txtNewModelo.value
            if (txtNewColor.value != "") {
                let c = txtNewColor.value
                if (txtNewAño.value != "" && txtNewAño.value > 1900 && txtNewAño.value < 2030) {
                    let d = txtNewAño.value
                    if (txtNewPrecio.value != "" && txtNewPrecio.value > 0) {
                        let e = txtNewPrecio.value
                        const vehiculoNuevo = new Vehiculo(x, a, b, c, d, e, false)
                        arrayVehiculos.push(vehiculoNuevo)
                        editarArrayLS()
                        Swal.fire({
                            icon: 'success',
                            title: 'El vehículo se creó satisfactoriamente con la ID ['+x+']',
                            showConfirmButton: false,
                            timer: 3000
                        })
                        setTimeout (()=> { location.href = "../index.html" }, 3000)
                    }else { errorCrear () }
                }else { errorCrear () }
            }else { errorCrear () }
        }else { errorCrear () }
    }else { errorCrear () }
}

function errorCrear () {
    Swal.fire({
        icon: 'error',
        title: 'Debe completar correctamente los campos para agregar un nuevo vehículo a la base de datos',
        showConfirmButton: false,
        timer: 3000
    })
}

function volverHome () {
    location.href = "../index.html"
}

function leerArrayLS () {
    if (!localStorage.getItem("defaultArray")) {
        defaultArray()
        editarArrayLS ()
    }else {
        const arrayEnLS = JSON.parse(localStorage.getItem("defaultArray"))
        for (let i = 0; i < arrayEnLS.length; i++) {
            arrayVehiculos[i] = arrayEnLS[i]
        }
    }
}

function editarArrayLS () {
    const arrayEnJSON = JSON.stringify(arrayVehiculos);
    localStorage.setItem("defaultArray", arrayEnJSON);
}