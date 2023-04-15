function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = product.image;
  card.appendChild(img);

  const title = document.createElement("h3");
  title.innerText = product.title;
  card.appendChild(title);

  const button = document.createElement("button");
  button.innerText = "View Details";
  button.disabled = !product.actionLabel;
  if (product.actionLabel) {
    button.addEventListener("click", () => {
      fetchProductDetails(product.details);
    });
  }
  card.appendChild(button);

  return card;
}

function loadProductCards() {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("product-grid");
      data.forEach((product, index) => {
        setTimeout(() => {
          const card = createCard(product);
          container.appendChild(card);
        }, 1000 * index);
      });
    });
}

function fetchProductDetails(detailsUrl) {
  fetch(detailsUrl)
    .then((response) => response.json())
    .then((data) => {
      // Display product details in a modal or another element
    });
}

loadProductCards();