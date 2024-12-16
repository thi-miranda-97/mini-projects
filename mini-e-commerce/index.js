"strict mode";

const products = [
  {
    name: "Snake Plant Serenity",
    type: "Indoor",
    description: "Easy care, perfect for beginners.",
    price: "$25",
    size: "SM",
    image: "./images/plant-1.jpeg",
  },
  {
    name: "Peace Lily Elegance",
    type: "Indoor",
    description: "Purifies air, ideal for low light.",
    price: "$20",
    size: "MD",
    image: "./images/plant-2.jpeg",
  },
  {
    name: "Golden Pothos Trail",
    type: "Outdoor",
    description: "Fast-growing vine, thrives anywhere.",
    price: "$18",
    size: "SM",
    image: "./images/plant-3.jpeg",
  },
  {
    name: "Fiddle Leaf Fig",
    type: "Indoor",
    description: "Large, lush leaves for bright spaces.",
    price: "$45",
    size: "LG",
    image: "./images/plant-4.jpeg",
  },
  {
    name: "Monstera Deliciosa",
    type: "Indoor",
    description: "Tropical beauty with split leaves.",
    price: "$40",
    size: "LG",
    image: "./images/plant-5.jpeg",
  },
  {
    name: "Spider Plant Classic",
    type: "Indoor",
    description: "Low-maintenance with vibrant green leaves.",
    price: "$15",
    size: "SM",
    image: "./images/plant-6.jpeg",
  },
  {
    name: "Aloe Vera Wonder",
    type: "Outdoor",
    description: "Healing properties, easy to care for.",
    price: "$22",
    size: "MD",
    image: "./images/plant-7.jpeg",
  },
  {
    name: "Succulent Garden Mix",
    type: "Indoor",
    description: "Collection of colorful succulents.",
    price: "$28",
    size: "SM",
    image: "./images/plant-8.jpeg",
  },
  {
    name: "ZZ Plant Resilience",
    type: "Indoor",
    description: "Hardy plant that thrives in neglect.",
    price: "$30",
    size: "MD",
    image: "./images/plant-9.jpeg",
  },
  {
    name: "Lavender Bliss",
    type: "Outdoor",
    description: "Fragrant herb, perfect for gardens.",
    price: "$25",
    size: "SM",
    image: "./images/plant-10.jpeg",
  },
  {
    name: "Rose Bush Delight",
    type: "Outdoor",
    description: "Classic beauty for outdoor spaces.",
    price: "$40",
    size: "LG",
    image: "./images/plant-11.jpeg",
  },
  {
    name: "Cactus Desert Jewel",
    type: "Indoor",
    description: "Drought-resistant, unique shape.",
    price: "$15",
    size: "SM",
    image: "./images/plant-12.jpeg",
  },
  {
    name: "Bamboo Fortune Plant",
    type: "Outdoor",
    description: "Symbol of luck, requires little care.",
    price: "$18",
    size: "MD",
    image: "./images/plant-13.jpeg",
  },
  {
    name: "Orchid Elegance",
    type: "Indoor",
    description: "Delicate flowers, adds luxury.",
    price: "$35",
    size: "MD",
    image: "./images/plant-14.jpeg",
  },
  {
    name: "Bonsai Harmony",
    type: "Indoor",
    description: "Miniature tree for peaceful spaces.",
    price: "$50",
    size: "SM",
    image: "./images/plant-15.jpeg",
  },
  {
    name: "Jade Plant Prosperity",
    type: "Outdoor",
    description: "Symbol of good fortune and growth.",
    price: "$25",
    size: "MD",
    image: "./images/plant-16.jpeg",
  },
  {
    name: "Palm Majesty",
    type: "Outdoor",
    description: "Tall, majestic greenery for gardens.",
    price: "$60",
    size: "LG",
    image: "./images/plant-17.jpeg",
  },
  {
    name: "Fern Green Wave",
    type: "Indoor",
    description: "Air-purifying, lush greenery.",
    price: "$20",
    size: "MD",
    image: "./images/plant-18.jpeg",
  },
  // {
  //   name: "Tulip Bulb Surprise",
  //   type: "Outdoor",
  //   description: "Bright seasonal flowers for gardens.",
  //   price: "$18",
  //   size: "SM",
  //   image: "./images/plant-19.jpeg",
  // },
  // {
  //   name: "Daisy Bloom Basket",
  //   type: "Outdoor",
  //   description: "Vibrant blooms for cheerful spaces.",
  //   price: "$22",
  //   size: "MD",
  //   image: "./images/plant-20.jpeg",
  // },
];

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.querySelector(".categories__filter"); // This is for filter buttons
  const productList = document.getElementById("product-list"); // This is where products will be displayed
  const filterButtons = document.querySelectorAll(".categories__filter--item");

  // Check if the product display container exists
  if (!productList) {
    console.error("Element with id 'product-list' not found.");
    return;
  } else {
    filterButtons[0].classList.add("active");
    displayProducts(products);
  }

  // Function to render products
  function displayProducts(products) {
    productList.innerHTML = ""; // Clear the product container
    products.forEach((item) => {
      const card = `
        <div class="categories__item">
          <img
            src="${item.image}"
            alt="${item.name}"
            class="categories__item--image"
          />
          <span class="categories__item--type">${item.type}</span>
          <h3 class="tertiary--heading">${item.name}</h3>
          <p class="categories__item--description">
            ${item.description}
          </p>
          <div class="categories__item--container">
            <span class="categories__item--price">${item.price}</span>
            <a href="#" class="categories__item--btn">Add to Cart</a>
          </div>
        </div>
      `;
      productList.insertAdjacentHTML("beforeend", card);
    });
    let cartCount = 0;
    const AddCartButtons = document.querySelectorAll(".categories__item--btn");
    const cartCountEl = document.getElementById("cart-count");
    AddCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Do you want to add this item to your cart?");
        cartCount++;
        console.log(cartCount);
        cartCountEl.textContent = cartCount;
      });
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from All Products button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Filter
      const category = button.textContent.trim();
      if (category === "All products") {
        displayProducts(products);
      } else {
        const filtered = products.filter(
          (product) => product.type === category
        );
        displayProducts(filtered);
      }
    });
  });
});
