let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
   cartItems.push({ name: productName, price: price });
   cartTotal += price;
   updateCart();
}

function updateCart() {
   const cartItemsList = document.getElementById("cart-items");
   const cartTotalElement = document.getElementById("cart-total");

   // Clear existing items
   cartItemsList.innerHTML = "";

   // Populate the cart items
   cartItems.forEach(item => {
       const li = document.createElement("li");
       li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
       cartItemsList.appendChild(li);
   });

   // Update the total
   cartTotalElement.textContent = cartTotal.toFixed(2);
}