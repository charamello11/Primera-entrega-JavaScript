// Declaro un array con los datos de las pizzas y sus precios
const pizzas = [
    { nombre: 'Margarita', precio: 300 },
    { nombre: 'Pepperoni', precio: 200 },
    { nombre: 'Hawaiana', precio: 500 },
    { nombre: 'Vegetariana', precio: 400 }
  ];
  
  let carrito = [];
  
  let seleccion = prompt("¡Bienvenido a Mistica Pizza! ¿Deseas ordenar una pizza? (SI/NO)");
  
  while (seleccion.toLowerCase() !== "si" && seleccion.toLowerCase() !== "no") {
    console.log("Por favor, ingresa solo SI o NO.");
    seleccion = prompt("¿Deseas ordenar una pizza? (SI/NO)");
  }
  
  if (seleccion.toLowerCase() === "si") {
    console.log("A continuación te mostramos nuestro menú de pizzas:");
    pizzas.forEach((pizza, index) => {
      console.log(`${index + 1}. ${pizza.nombre} - $${pizza.precio}`);
    });
  } else if (seleccion.toLowerCase() === "no") {
    console.log("¡Esperamos verte pronto! ¡Buen día!");
  }
  
  while (seleccion.toLowerCase() === "si") {
    let opcionPizza = parseInt(prompt("Ingresa el número de la pizza que deseas ordenar:"));
  
    if (opcionPizza >= 1 && opcionPizza <= pizzas.length) {
      let pizzaElegida = pizzas[opcionPizza - 1];
      let cantidad = parseInt(prompt(`¿Cuántas ${pizzaElegida.nombre} deseas ordenar?`));
  
      if (cantidad > 0) {
        let subtotal = pizzaElegida.precio * cantidad;
        carrito.push({ pizza: pizzaElegida.nombre, cantidad, subtotal });
        console.log(`Has agregado ${cantidad} ${pizzaElegida.nombre} al carrito.`);
      } else {
        console.log("La cantidad ingresada no es válida. Inténtalo nuevamente.");
      }
    } else {
      console.log("Opción inválida. Por favor, selecciona un número válido.");
    }
  
    seleccion = prompt("¿Deseas ordenar otra pizza? (SI/NO)");
  }
  
  if (carrito.length > 0) {
    let total = 0;
  
    carrito.forEach((item) => {
      total += item.subtotal;
    });
  
    console.log(`Total a pagar: $${total.toFixed(2)}. ¡Gracias por tu compra!`);
  } else {
    console.log("No has agregado ninguna pizza al carrito. ¡Hasta luego!");
  }
  