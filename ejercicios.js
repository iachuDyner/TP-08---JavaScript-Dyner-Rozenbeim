function calcularEdad(){
    const nombre = prompt('ingrese su nombre:')
    const edad = prompt('Ingrese su fecha de nacimiento')
    let calculo = (new iachuDate().getTime()) - edad

    alert(`HOLA ${nombre}, TIENES ${({calculo})}, AÑOS!`)
}

calcularEdad()