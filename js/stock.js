class Vehiculo {
    constructor(x, a, b, c, d, e, f){
        this.id = x;
        this.marca = a;
        this.modelo = b;
        this.color = c;
        this.año = d;
        this.precio = e;
        this.vendido = f;
    }
}

const arrayVehiculos = []

function defaultArray () {
    arrayVehiculos.length = 0;
    fetch ("../json/stock.json")
    .then( (response) => response.json() )
    .then( (data) => {
        for(let x = 0; x < data.length; x++) {
            const autito = new Vehiculo(data[x].id, data[x].marca, data[x].modelo, data[x].color, data[x].año, data[x].precio, data[x].vendido)
            arrayVehiculos.push(autito)
        }
        editarArrayLS ()
        refreshStock()
    })
}
