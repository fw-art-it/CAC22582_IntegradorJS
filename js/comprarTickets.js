// Inicializo variables
// Precio del ticket
const valorTicket = 200;

// Descuentos por categoría
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

// Datos del formulario
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");


//FUNCIONES

//Cálculo el monto a pagar
//limpio los campos marcados con error
//verifico que los datos estén completos y sean correctos
//luego realizo el cálculo del descuento y el total
function monto_a_pagar() {

    // Limpio los campos marcados con error
    quitarMarcaError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("El nombre no puede estar en blanco. Por favor, escriba su nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("El apellido no puede estar en blanco. Por favor, escriba su apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Es necesario ingresar un mail. Escriba su dirección de mail.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Verifico si el correo electrónico es válido
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("El email no es válido. Por favor, escriba un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Verifico si se ingresó por lo menos 1 ticket, sino se aplica estilo de error y vuelve a la carga del formulario
    if ( (cantidadTickets.value === 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Debe ingresar la cantidad de tickets que desea adquirir.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    // Verifico que esté seleccionada una categoría,  sino se aplica estilo de error y vuelve a la carga del formulario
    if (categoria.value == "") {
        alert("Seleccione una categoría.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // Calculo es total y luego el descuento
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    // Publico el resultado
    totalPago.innerHTML = totalValorTickets;
} 

// Función para sacar la marca de error en el formulario
// recorro todos los campos del formulario y remuevo is-invalid
function quitarMarcaError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Escucho el botón resumen y disparo la función monto_a_pagar
btnResumen.addEventListener('click', monto_a_pagar);

// Función para el botón Borrar para que borre el total publicado
// y limpie las marcas de error en en formulario
function reset_total_a_pagar() {
    quitarMarcaError();
    totalPago.innerHTML = "";
}

// Escucho el botón resumen y disparo la función monto_a_pagar
btnBorrar.addEventListener('click', reset_total_a_pagar);