//
//
//

// Function to initialize the application
const initApp = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let products = await response.json();

  let cartCount = 0;
  let cartitems = JSON.parse(localStorage.getItem("cartitems")) || [];

  // Display initial cart count
  updateCartCount(cartitems.length);

  let productId = new URLSearchParams(window.location.search).get("id");

  if (productId) {
    let info = products.find((value) => value.id == productId);

    if (info) {
      console.log(info);
      displayProduct(info);
      setupEventListeners(info);
    }
  }
};
