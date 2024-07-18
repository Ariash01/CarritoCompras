//Carrito de compras

function listaItems(){
    return prompt("¡Bienvenido al carrito de compras de nuestra tienda!\n1. Camiseta $20.00\n2. Pantalón $35.00\n3. Zapatos $43.00\n4. Cartera LV $845.00\n5. Finalizar compra\nIngresa una opción: ");
}

function obtenerPrecio(opcion){
    switch (opcion){
        case '1':
            return 20;
        case '2':
            return 35;
        case '3':
            return 43;
        case '4':
            return 845;
        case '5':
            return 0;
        default:
            alert("Opción no válida. Ingresa de nuevo");
        return null;
    }
}

function datos(){
    alert("¡Ingresa tus datos para realizar el envío!");

    let nombre;
    let nombreValido = false;
    while (!nombreValido) {
        nombre = prompt("Por favor, ingresa tu nombre:");
        if (nombre && nombre.match(/^[A-Za-z\s]+$/)) {
            nombreValido = true;
        } else {
            alert("El nombre no puede estar vacío o contener números. Por favor, ingresa tu nombre.");
        }
    }

    let direccion;
    let direccionValida = false;
    while (!direccionValida) {
        direccion = prompt("Ingresa tu dirección:");
        if (direccion.trim() !== '') {
            direccionValida = true;
        } else {
            alert("La dirección no puede estar vacía. Por favor, ingresa tu dirección.");
        }
    }
    return alert("Muchas gracias " + nombre + " por comprar en nuestra tienda, enviaremos tu pedido a la dirección " + direccion + ".");
}


function carritoDeCompras() {
    let total = 0;
    let opcion;

    do {
        opcion = listaItems();
        let precio = obtenerPrecio(opcion);
        if (precio !== null && precio !== 0) {
            total += precio;
            alert("Artículo agregado. Precio: $" + precio + " \nTotal acumulado: $" + total);
        } else if (precio === 0) {
            alert("Compra finalizada.\nTotal a pagar: $" + total);
        }
    } while (opcion !== '5');

    if (total >0){
        datos();
    } else {
        alert("No hay ítems en el carrito");
    }

    let volverComprar = prompt("¿Deseas volver a comprar? Escribe 'si', caso contrario ingresa cualquier letra o número para salir.");
    if (volverComprar.toLowerCase() == 'si'){
        carritoDeCompras();
    }
}

carritoDeCompras();