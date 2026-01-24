const products = [
  {
    id: 1,
    brand: "Nike",
    title: "Men Running Shoes",
    price: 3499,
    mrp: 5999,
    discount: 42,
    rating: 4.3,
    image: "images/demo.jpg",
    link: "https://affiliate-link-here"
  },
  {
    id: 2,
    brand: "Puma",
    title: "Sports T-Shirt",
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.1,
    image: "images/demo.jpg",
    link: "https://affiliate-link-here"
  }
];

const productList = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="img-wrap">
      <img src="${p.image}" alt="${p.title}">
      <span class="wishlist">♡</span>
    </div>

    <div class="product-info">
      <h4 class="brand">${p.brand}</h4>
      <p class="title">${p.title}</p>

      <div class="price">
        <span class="current">₹${p.price}</span>
        <span class="mrp">₹${p.mrp}</span>
        <span class="off">(${p.discount}% OFF)</span>
      </div>

      <div class="rating">⭐ ${p.rating}</div>

      <a href="${p.link}" target="_blank" class="buy-btn">
        Buy from Brand
      </a>
    </div>
  `;

  productList.appendChild(card);
});