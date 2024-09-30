function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    return edad;
} 



function mostrarFrutas(frutas){
frutas.forEach((fruta) => {
    console.log(`${fruta}`);}
)
}

function BuscarFruta(frutas, frutaBuscada){
if (frutas.includes(frutaBuscada.toLowerCase())) {
    console.log(`Sí, tenemos ${frutaBuscada}!`);
} else {
    console.log(`No, no tenemos ${frutaBuscada}!`);
}
}

function RecorrerCiudades(ciudad)
{for (let clave in ciudad) {
    console.log(`Clave: ${clave}, Valor: ${ciudad[clave]}`);
}
}