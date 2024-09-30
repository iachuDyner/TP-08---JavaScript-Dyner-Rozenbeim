function pedirDatos() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (YYYY-MM-DD)");

    const edad = calcularEdad(fechaNacimiento);
    const mensaje = `Hola ${nombre}, tienes ${edad} años!`;

    console.log(mensaje);
    document.getElementById("resultado").textContent = mensaje;
}

// Llama a la función al cargar el script
pedirDatos();