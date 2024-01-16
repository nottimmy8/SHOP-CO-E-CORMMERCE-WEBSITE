const cartItemHTML = `
  <div class="itemz">
    <div class="itemzBox">
      <div class="itemzIMG">
        <img src="${item.image}" alt="${item.name}" width="50">
      </div>
      <div class="itemzTxT">
        <div class="">
          <p class="name">${item.name}</p>
          <p>Size: ${item.size}</p>
          <p>Color: ${item.color}</p>
        </div>
        <p class="pricez">$${item.price}</p>
      </div>
    </div>
    <div class="itemzBox2">
      <div class="deleteBtn" data-index="${index}">
        <i class="material-symbols-outlined"> delete </i>
      </div>

      <div class="quantityy">
        <span class="minus">-</span>
        <span class="cartCount" data-quantity="${item.quantity}">${item.quantity}</span>
        <span class="plus">+</span>
      </div>
    </div>
  </div>
`;

cartContainer.innerHTML += cartItemHTML;

// Add event listener for delete button
const deleteBtns = document.querySelectorAll(".deleteBtn");
deleteBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    // Remove item from cartitems array
    cartitems.splice(index, 1);

    // Update localStorage with modified cartitems
    localStorage.setItem("cartitems", JSON.stringify(cartitems));

    // Update the cart container
    updateCartContainer();
  });
});

// Add event listeners for plus and minus buttons
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

plusBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    cartitems[index].quantity++;
    document.querySelector(
      `.cartCount[data-quantity="${cartitems[index].quantity}"]`
    ).innerText = cartitems[index].quantity;
    updateCartCount();
  });
});

minusBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    if (cartitems[index].quantity > 1) {
      cartitems[index].quantity--;
      document.querySelector(
        `.cartCount[data-quantity="${cartitems[index].quantity}"]`
      ).innerText = cartitems[index].quantity;
      updateCartCount();
    }
  });
});

// Your existing updateCartContainer code here
