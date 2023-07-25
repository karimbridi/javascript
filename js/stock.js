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
const vehiculo1 = new Vehiculo(1, "Audi", "A3", "Gris", 2020, "35000", false)
const vehiculo2 = new Vehiculo(2, "Chevrolet", "Cruze", "Rojo", 2021, "28000", false)
const vehiculo3 = new Vehiculo(3, "Ford", "Raptor", "Negro", 2022, "38000", false)
const vehiculo4 = new Vehiculo(4, "Ford", "Focus", "Rojo", 2015, "16000", false)
const vehiculo5 = new Vehiculo(5, "Mercedes", "C250", "Gris", 2015, "27000", true)
const vehiculo6 = new Vehiculo(6, "Honda", "Civic", "Blanco", 2023, "24000", false)
const vehiculo7 = new Vehiculo(7, "Porshe", "911", "Verde ingles", 1990, "36000", true)
const vehiculo8 = new Vehiculo(8, "Alfa Romeo", "Giulietta", "Negro", 2015, "25000", false)

const arrayVehiculos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5, vehiculo6, vehiculo7, vehiculo8]