// Variables globales
var cartItems = []; // Array para almacenar los elementos del carrito
var cartTotal = 0.00; // Variable para almacenar el total del carrito

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
  cartItems.push({ name: productName, price: productPrice });
  cartTotal += productPrice;

  updateCart(); // Actualizar el carrito después de agregar un elemento
}

// Función para actualizar el carrito en la interfaz de usuario
function updateCart() {
  var cartItemsElement = document.getElementById('cart-items');
  var cartTotalElement = document.getElementById('cart-total');

  // Limpiar elementos del carrito antes de actualizarlos
  cartItemsElement.innerHTML = '';

  // Actualizar los elementos del carrito
  cartItems.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item.name + ' - $' + item.price.toFixed(2);
    cartItemsElement.appendChild(li);
  });

  // Actualizar el total del carrito
  cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Función para finalizar la compra
function checkout() {
  // Aquí puedes agregar lógica adicional, como enviar la información del carrito al servidor, etc.
  alert('Compra finalizada. Total: $' + cartTotal.toFixed(2));

  // Reiniciar el carrito
  cartItems = [];
