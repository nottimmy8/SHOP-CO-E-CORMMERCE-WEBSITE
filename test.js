document.addEventListener("DOMContentLoaded", function () {
  // Retrieve cart items from localStorage
  const storedCartItems = localStorage.getItem("cartitems");
  const cartitems = storedCartItems ? JSON.parse(storedCartItems) : [];

  // Update the cart container
  const cartContainer = document.querySelector("#cart-container");

  if (cartitems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartitems.forEach((item, index) => {
      const cartItemHTML = `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" width="50">
          <p>${item.name}</p>
          <p>$${item.price}</p>
          <button class="deleteBtn" data-index="${index}">Delete</button>
        </div>
      `;

      cartContainer.innerHTML += cartItemHTML;
    });

    // Add event listener for delete buttons
    const deleteButtons = document.querySelectorAll(".deleteBtn");
    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        // Remove item from cartitems array
        cartitems.splice(index, 1);

        // Update localStorage with modified cartitems
        localStorage.setItem("cartitems", JSON.stringify(cartitems));

        // Update the cart container
        updateCartContainer();
      });
    });
  }
});

// Function to update the cart container
function updateCartContainer() {
  const cartContainer = document.querySelector("#cart-container");

  // Your existing updateCartContainer code here
}
