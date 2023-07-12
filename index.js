let total = 0;

let seleccion = prompt("¡Bienvenido a Mistica Pizza! ¿Deseas ordenar una pizza? (SI/NO)");

while (seleccion.toLowerCase() !== "si" && seleccion.toLowerCase() !== "no") {
  console.log("Por favor, ingresa solo SI o NO.");
  seleccion = prompt("¿Deseas ordenar una pizza? (SI/NO)");
}

if (seleccion.toLowerCase() === "si") {
  console.log("A continuación te mostramos nuestro menú de pizzas:");
  console.log("1. Margarita - $300");
  console.log("2. Pepperoni - $200");
  console.log("3. Hawaiana - $500");
  console.log("4. Vegetariana - $400");
} else if (seleccion.toLowerCase() === "no") {
  console.log("¡Esperamos verte pronto! ¡Buen día!");
}

while (seleccion.toLowerCase() === "si") {
  let opcionPizza = parseInt(prompt("Ingresa el número de la pizza que deseas ordenar:"));

  if (opcionPizza >= 1 && opcionPizza <= 4) {
    let cantidad = parseInt(prompt(`¿Cuántas pizzas deseas ordenar?`));

    if (cantidad > 0) {
      let precio = 0;

      switch (opcionPizza) {
        case 1:
          precio = 300;
          break;
        case 2:
          precio = 200;
          break;
        case 3:
          precio = 500;
          break;
        case 4:
          precio = 400;
          break;
      }

      let subtotal = precio * cantidad;
      total += subtotal;
      console.log(`Has agregado ${cantidad} pizza(s) al carrito. Subtotal: $${subtotal}`);
    } else {
      console.log("La cantidad ingresada no es válida. Inténtalo nuevamente.");
    }
  } else {
    console.log("Opción inválida. Por favor, selecciona un número válido.");
  }

  seleccion = prompt("¿Deseas ordenar otra pizza? (SI/NO)");
}

if (total > 0) {
  console.log(`Total a pagar: $${total.toFixed(2)}. ¡Gracias por tu compra!`);
} else {
  console.log("No has agregado ninguna pizza al carrito. ¡Hasta luego!");
}
