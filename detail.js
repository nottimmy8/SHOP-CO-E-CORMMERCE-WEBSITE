import menu from "./menu.js";
// import products from "./products.js";
let app = document.getElementById("app");
let temporaryContent = document.getElementById("temporaryContent");

// load layout file
const loadTemplate = () => {
  fetch("/template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      let contentTab = document.getElementById("contentTab");
      contentTab.innerHTML = temporaryContent.innerHTML;
      temporaryContent.innerHTML = null;
      menu();
      initApp();
    });
};
loadTemplate();

// Initialize the application
const initApp = async () => {
  let response = await fetch("products.json");
  let products = await response.json();
  let cartCount = 1;
  let cartitems = JSON.parse(localStorage.getItem("cartitems")) || [];
  let cartlength = cartitems.length;
  document.querySelector("#cartnum").innerText = cartlength;

  let productId = new URLSearchParams(window.location.search).get("id");

  if (productId) {
    let info = products.find((value) => value.id == productId);

    if (info) {
      console.log(info);

      let Shop = document.querySelector(".Shop");

      let productHTML = `
      <div class="shopIMG">
      <div class="left-boxes">
        <div class="box"><img src="${info.image}" ></div>
        <div class="box"><img src="${info.image}" ></div>
        <div class="box"><img src="${info.image}" ></div>
      </div>
      <div class="right-box"><img src="${info.image}" ></div>
    </div>
    <div class="shopTXT">
    <h2>${info.name} </h2>
    <div class="star"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
    <path d="M11.7925 0L15.2932 7.53796L23.544 8.53794L17.4567 14.1966L19.0553 22.3526L11.7925 18.3119L4.52969 22.3526L6.12829 14.1966L0.0410357 8.53794L8.29182 7.53796L11.7925 0Z" fill="#FFC633"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
    <path d="M11.7925 0L15.2932 7.53796L23.544 8.53794L17.4567 14.1966L19.0553 22.3526L11.7925 18.3119L4.52969 22.3526L6.12829 14.1966L0.0410357 8.53794L8.29182 7.53796L11.7925 0Z" fill="#FFC633"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
    <path d="M11.7925 0L15.2932 7.53796L23.544 8.53794L17.4567 14.1966L19.0553 22.3526L11.7925 18.3119L4.52969 22.3526L6.12829 14.1966L0.0410357 8.53794L8.29182 7.53796L11.7925 0Z" fill="#FFC633"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
    <path d="M11.7925 0L15.2932 7.53796L23.544 8.53794L17.4567 14.1966L19.0553 22.3526L11.7925 18.3119L4.52969 22.3526L6.12829 14.1966L0.0410357 8.53794L8.29182 7.53796L11.7925 0Z" fill="#FFC633"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="23" viewBox="0 0 12 23" fill="none">
    <path d="M4.73719 22.3526L12 18.3119V0L8.49932 7.53796L0.248535 8.53793L6.33579 14.1966L4.73719 22.3526Z" fill="#FFC633"/>
  </svg><span>4.5/5</span></div>
   <h3> $${info.price} <span>$300</span> </h3>
   <p> ${info.description}</p>
   <div class="color">
      <p>Select Colors</p>
      <div class="col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <circle cx="18.5" cy="18.5" r="18.5" fill="#4F4631" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <circle cx="18.5" cy="18.5" r="18.5" fill="#31344F" />
        </svg>
      </div>
    </div>

    <!-- -->
    <div class="changeSize">
      <h3>Change Size</h3>
      <div class="sizeBtn">
        <button>small</button>
        <button>medium</button>
        <button>large</button>
        <button>x-large</button>
      </div>
    </div>

    <div class="AddCartBtn">

    <div class="quantityy">
    <span class="minus">-</span>
    <span class="cartCount" >${cartCount} </span>
    <span class="plus">+</span>
</div>

<button class="cartBtn">Add to cart</button>
  </div>


    </div>

      `;

      Shop.innerHTML = productHTML;

      document.querySelector(".plus").addEventListener("click", function () {
        if (cartCount < info.quantity) {
          cartCount++;
          document.querySelector(".quantityy .cartCount").innerText = cartCount;
        }
      });

      document.querySelector(".minus").addEventListener("click", function () {
        if (cartCount > 1) {
          cartCount--;
          document.querySelector(".quantityy .cartCount").innerText = cartCount;
        }
      });

      const addtocart = () => {
        if (cartCount > 0) {
          // Find the index of the product in the cartItems array
          const existingProductIndex = cartitems.findIndex(
            (item) =>
              item.id === info.id &&
              item.size === selectedSize &&
              item.color === selectedColor
          );
          // If the product already exists in the cart, update the quantity
          if (existingProductIndex !== -1) {
            cartitems[existingProductIndex].quantity += cartCount;
          } else {
            // Add the current product to the cartItems array
            cartitems.push({
              id: info.id,
              name: info.name,
              image: info.image,
              price: info.price,
              quantity: cartCount,
            });
          }

          // cartlength++;
          cartlength = cartitems.length;
          document.querySelector("#cartnum").innerText = cartlength;

          // Store the cart items in localStorage
          localStorage.setItem("cartitems", JSON.stringify(cartitems));

          // Update the cart count
          updateCartCount();
        }
      };

      document.querySelector(".cartBtn").addEventListener("click", addtocart);
    }
  }
};

// Call the function
initApp();

// PRODUCT LIST
let displayProducts = async () => {
  // Fetch the products from the products.json file
  let products = await fetch("products.json");

  // Convert the fetched products to JSON format
  let productList = await products.json();

  // Log the product list to the console
  console.log(productList);

  // Get the container element where the products will be displayed
  let listProduct = document.getElementById("listProduct");

  // Limit the number of displayed products to 4
  // productList = productList.slice(0, 4);

  // Iterate over the product list
  for (let product of productList) {
    // Create a new div element for each product
    let divItems = document.createElement("div");
    divItems.classList.add("content");

    // Set the innerHTML of the div to the product details
    divItems.innerHTML = ` <a href="/detail.html?id=${product.id}"><div class="image"><img src="${product.image}" alt="${product.name}"/></div> </a>
    <h2 class="name">${product.name}</h2>
    <div class = "starz"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
    <path d="M11.7925 0L15.2932 7.53796L23.544 8.53794L17.4567 14.1966L19.0553 22.3526L11.7925 18.3119L4.52969 22.3526L6.12829 14.1966L0.0410357 8.53794L8.29182 7.53796L11.7925 0Z" fill="#FFC633"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
    <path d="M11.7925 0L15.2932 7.53796L23.544 8.53794L17.4567 14.1966L19.0553 22.3526L11.7925 18.3119L4.52969 22.3526L6.12829 14.1966L0.0410357 8.53794L8.29182 7.53796L11.7925 0Z" fill="#FFC633"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
    <path d="M11.7925 0L15.2932 7.53796L23.544 8.53794L17.4567 14.1966L19.0553 22.3526L11.7925 18.3119L4.52969 22.3526L6.12829 14.1966L0.0410357 8.53794L8.29182 7.53796L11.7925 0Z" fill="#FFC633"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
    <path d="M11.7925 0L15.2932 7.53796L23.544 8.53794L17.4567 14.1966L19.0553 22.3526L11.7925 18.3119L4.52969 22.3526L6.12829 14.1966L0.0410357 8.53794L8.29182 7.53796L11.7925 0Z" fill="#FFC633"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="23" viewBox="0 0 12 23" fill="none">
    <path d="M4.73719 22.3526L12 18.3119V0L8.49932 7.53796L0.248535 8.53793L6.33579 14.1966L4.73719 22.3526Z" fill="#FFC633"/>
  </svg><span>4.5/5<span></div>
    
    <h4 class="price">$${product.price}</h4>
   `;

    // Append the div to the container
    listProduct.appendChild(divItems);
  }
};

// Call the function to display the products
displayProducts();
