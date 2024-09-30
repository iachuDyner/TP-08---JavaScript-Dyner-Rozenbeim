function pedirDatos() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (YYYY-MM-DD)");

    const edad = calcularEdad(fechaNacimiento);
    const mensaje = `Hola ${nombre}, tienes ${edad} años!`;

    console.log(mensaje);
    document.getElementById("resultado").textContent = mensaje;
}

pedirDatos();

const frutas = [
    "manzana",
    "plátano",
    "naranja",
    "fresa",
    "kiwi",
    "mango",
    "piña",
    "pera",
    "uva",
    "cereza"
];

console.log("Lista de frutas disponibles:");

mostrarFrutas(frutas);
const frutaBuscada = prompt("¿Qué fruta estás buscando?");

BuscarFruta(frutas, frutaBuscada);


console.log(10 == '10'); 
console.log(10 === '10'); 
console.log(typeof 10.6); 
console.log(true == 1); 


const ciudad = {
    nombre: "Buenos Aires",
    fechaFundacion: "1536",
    poblacion: 2890000,
    extension: "203 km²"
};


RecorrerCiudades(ciudad);
