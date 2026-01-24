const products = [
  {
    name: "Nike Men's T-Shirt",
    price: "₹999",
    image: "https://via.placeholder.com/200",
    affiliateLink: "https://www.amazon.in"
  },
  {
    name: "Women Kurti",
    price: "₹1,299",
    image: "https://via.placeholder.com/200",
    affiliateLink: "https://www.flipkart.com"
  },
  {
    name: "Running Shoes",
    price: "₹2,999",
    image: "https://via.placeholder.com/200",
    affiliateLink: "https://www.myntra.com"
  }
];

const productList = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.image}" />
    <h4>${p.name}</h4>
    <div class="price">${p.price}</div>
    <button onclick="goToAffiliate('${p.affiliateLink}')">
      Buy Now
    </button>
  `;
  productList.appendChild(card);
});

function goToAffiliate(link) {
  window.location.href = link;
}