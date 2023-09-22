function obtenerRespuesta(mensaje) {
    return prompt(mensaje);
  }
  
  function mostrarMensaje(mensaje) {
    alert(mensaje);
  }
  
  const productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Sombrero", precio: 10 },
  ];
  
  function simularCompra() {
    mostrarMensaje("Bienvenido a la tienda virtual. Estos son nuestros productos:");
  
    for (let i = 0; i < productos.length; i++) {
      mostrarMensaje(`${i + 1}. ${productos[i].nombre} - $${productos[i].precio}`);
    }
  
    let carrito = [];
    let total = 0;
  
    while (true) {
      const opcion = obtenerRespuesta("Ingresa el número del producto que deseas comprar (0 para pagar):");
      const opcionNumero = parseInt(opcion);
  
      if (opcionNumero >= 1 && opcionNumero <= productos.length) {
        const productoElegido = productos[opcionNumero - 1];
        carrito.push(productoElegido);
        total += productoElegido.precio;
        mostrarMensaje(`${productoElegido.nombre} se ha añadido al carrito.`);
      } else if (opcionNumero === 0) {
        mostrarMensaje("Resumen de la compra:");
  
        for (let i = 0; i < carrito.length; i++) {
          mostrarMensaje(`${carrito[i].nombre} - $${carrito[i].precio}`);
        }
  
        mostrarMensaje(`Total a pagar: $${total}`);
        mostrarMensaje("Gracias por comprar con nosotros. ¡Vuelve pronto!");
        break;
      } else {
        mostrarMensaje("Opción no válida. Por favor, ingresa un número válido.");
      }
    }
  }
  
  simularCompra();
  