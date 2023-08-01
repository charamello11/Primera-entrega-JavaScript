// Declaro un array con los datos de las pizzas y sus precios
const pizzas = [
  { nombre: 'Margarita', precio: 300 },
  { nombre: 'Pepperoni', precio: 200 },
  { nombre: 'Hawaiana', precio: 500 },
  { nombre: 'Vegetariana', precio: 400 }
];

let carrito = [];

function mostrarMenu(pizzas) {
  console.log("A continuación te mostramos nuestro menú de pizzas:");
  pizzas.forEach((pizza, index) => {
    console.log(`${index + 1}. ${pizza.nombre} - $${pizza.precio}`);
  });
}

function obtenerPizzaElegida(pizzas, opcion) {
  if (opcion >= 1 && opcion <= pizzas.length) {
    return pizzas[opcion - 1];
  } else {
    return null;
  }
}

function agregarToppings() {
  let toppings = [];
  let toppingsCount = parseInt(prompt(`¿Cuántos toppings deseas agregar?`));

  for (let i = 0; i < toppingsCount; i++) {
    let topping = prompt(`Ingresa el topping #${i + 1}:`);
    toppings.push(topping);
  }

  return toppings;
}

function agregarPizzaAlCarrito(pizza, cantidad, toppings) {
  if (cantidad > 0) {
    let subtotal = pizza.precio * cantidad;
    carrito.push({ pizza: pizza.nombre, cantidad, toppings, subtotal });
    console.log(`Has agregado ${cantidad} ${pizza.nombre} al carrito con los siguientes toppings: ${toppings.join(', ')}. Subtotal: $${subtotal}`);
  } else {
    console.log("La cantidad ingresada no es válida. Inténtalo nuevamente.");
  }
}

let seleccion = prompt("¡Bienvenido a Mistica Pizza! ¿Deseas ordenar una pizza? (SI/NO)");

while (seleccion.toLowerCase() !== "si" && seleccion.toLowerCase() !== "no") {
  console.log("Por favor, ingresa solo SI o NO.");
  seleccion = prompt("¿Deseas ordenar una pizza? (SI/NO)");
}

if (seleccion.toLowerCase() === "si") {
  mostrarMenu(pizzas);
} else if (seleccion.toLowerCase() === "no") {
  console.log("¡Esperamos verte pronto! ¡Buen día!");
}

while (seleccion.toLowerCase() === "si") {
  let opcionPizza = parseInt(prompt("Ingresa el número de la pizza que deseas ordenar:"));
  let pizzaElegida = obtenerPizzaElegida(pizzas, opcionPizza);

  if (pizzaElegida) {
    let cantidad = parseInt(prompt(`¿Cuántas ${pizzaElegida.nombre} deseas ordenar?`));
    let toppings = agregarToppings();
    agregarPizzaAlCarrito(pizzaElegida, cantidad, toppings);
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

  console.log("Resumen de tu orden:");

  carrito.forEach((item) => {
    console.log(`${item.pizza} - Cantidad: ${item.cantidad} - Toppings: ${item.toppings.join(', ')} - Subtotal: $${item.subtotal.toFixed(2)}`);
  });

  console.log(`Total a pagar: $${total.toFixed(2)}. ¡Gracias por tu compra!`);
} else {
  console.log("No has agregado ninguna pizza al carrito. ¡Hasta luego!");
}
