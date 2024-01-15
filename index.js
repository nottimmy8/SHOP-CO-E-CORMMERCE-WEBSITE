import menu from "./menu.js";
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
  productList = productList.slice(4, 8);

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

// PRODUCT LIST
let displayItems = async () => {
  try {
    // Fetch the products from the products.json file
    let response = await fetch("products.json");
    let productList = await response.json();

    // Log the product list to the console
    console.log(productList);

    // Get the container element where the products will be displayed
    let NewProduct = document.getElementById("NewProduct");

    // Limit the number of displayed products to 4
    let slicedProducts = productList.slice(8, 12);

    // Iterate over the sliced product list
    for (let product of slicedProducts) {
      // Create a new div element for each product
      let divitems = document.createElement("div");
      divitems.classList.add("content");

      // Set the innerHTML of the div to the product details
      divitems.innerHTML = `<a href="/detail.html?id=${product.id}"><div class="image"><img src="${product.image}" alt="${product.name}"/></div> </a>
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
      NewProduct.appendChild(divitems);
    }
  } catch (error) {
    console.error("Error fetching and displaying items:", error);
  }
};

// Call the function to display the products
displayItems();
