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
    alert("Gracias por comprar. Pronto nos contactaremos para realizar el envío de los productos.");
    let volverComprar = prompt("¿Deseas volver a comprar? Escribe 'si'.");
    if (volverComprar.toLowerCase() == 'si'){
        carritoDeCompras();
    }
}

carritoDeCompras();