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


function CrearDoble(numeros)
{
const numerosDobles = numeros.map(numeros => numeros*2)

console.log(numerosDobles)
}

function DibujoUno()
{
    dibujo = `*`
    console.log(dibujo)
    console.log(dibujo.repeat(2))
    console.log(dibujo.repeat(3))
    console.log(dibujo.repeat(4))
    console.log(dibujo.repeat(5))
}
function DibujoDos()
{
    let linea1 = '-'.repeat(4) + '*' + '-'.repeat(4) 
    let linea2 = '-'.repeat(3) + '*'.repeat(3)+ '-'.repeat(3)
    let linea3 = '-'.repeat(2) + '*'.repeat(5)+ '-'.repeat(2)
    let linea4 = '-' + '*'.repeat(7)+ '-'
    let linea5 = '*'.repeat(9)


    console.log(linea1)
    console.log(linea2)
    console.log(linea3)
    console.log(linea4)
    console.log(linea5)
    
}





const filtrarButton = document.getElementById('filtrarButton');

filtrarButton.addEventListener('click', () =>{
    const nombresInput = document.getElementById('nombresInput');
    const nombre = nombresInput.value;
    const nombresArray = nombre.split(',').map(n => n.trim());
    console.log(nombresArray);
    const nombresConA = nombresArray.filter(n => n.startsWith('A'));
    
    document.getElementById('resultado').innerHTML = nombresConA.join(', ');
});



const reemplazarButton = document.getElementById('reemplazarButton');

reemplazarButton.addEventListener('click', () => {
    const cadenaInput = document.getElementById('cadenaInput').value;
    const palabraARemplacer = document.getElementById('palabraARemplacer').value;
    const palabraDeReemplazo = document.getElementById('palabraDeReemplazo').value;
    const cadenaResultante = cadenaInput.replaceAll(palabraARemplacer, palabraDeReemplazo);
    document.getElementById('resultado').innerHTML = cadenaResultante;
});