const hamburger = document.querySelector(".toggle");
const navItems = document.querySelector(".mobile-nav");

const cardContainer = document.querySelector(".card--container");

const toggleNav = () => {
  navItems.classList.toggle("navToggle");
  console.log("clicked");
};

let URI = "http://localhost:3007/property/get";
const fetchProperty = async () => {
  const req = await fetch(URI);
  const res = await req.json();
  let properties = res.properties;
  cardContainer.innerHTML = "";
  properties.forEach((property) => {
    const card = document.createElement("div");
    card.classList.add("card");
    console.log(property);

    card.innerHTML = `
     <a href="product.html?id=${property._id}" class="">
          <div class="card--image">
            <img src="${
              property.photohs || "./assets/hero-image2.webp"
            }" alt="${property.title}" />
          </div>
          <button class="btn--cta btn--secondary">${
            property.propertyType || "Rent"
          }</button>
          <button class="btn--cta btn--secondary">${
            property.category || "Buy"
          }</button>

          <div class="card--writeup">
            <div class="card--text">
              <h3 class="title">${property.title}</h3>
              <p class="location">${property?.address?.city}, ${
      property?.address.city
    }, ${property?.address?.street}</p>
              <p class="price">₦${property.price}</p>
            </div>

            <div class="card--data">
              <div class="data">
                <div class="data-info">
                  <span class="material-symbols-outlined"> bed </span>
                  <span>${property.bedrooms || 0}</span>
                </div>
                <p>Bedrooms</p>
              </div>
              <div class="data">
                <div class="data-info">
                  <span class="material-symbols-outlined"> bathtub </span>
                  <span>${property.bathrooms || 0}</span>
                </div>
                <p>Bathrooms</p>
              </div>
              <div class="data">
                <div class="data-info">
                  <span class="material-symbols-outlined"> garage </span>
                  <span>${property.garage || 0}</span>
                </div>
                <p>Garage</p>
              </div>
              <div class="data">
                <div class="data-info">
                  <span class="material-symbols-outlined"> square_foot </span>
                  <span>${property.area || 0}</span>
                </div>
                <p>Total Area</p>
              </div>
            </div>
          </div>
          </a>
        `;

    cardContainer.appendChild(card);
  });
};

fetchProperty();
