// Basic placeholder JS (future AI features add karenge)

const search = document.querySelector(".search");

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    alert("Searching: " + search.value);
  }
});