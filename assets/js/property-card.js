//property-card

function createPropertyCardHTML(property) {
  return `
            <div class="property-card__container">
                <a href="/detail.html" class="property-card">
                    <div class="property-card__image-container">
                        <img class="ratio-item property-card__img" src="${property.img}" alt="${property.name}">
                    </div>
                    <div class="property-card__desc">
                        <p class="property-card__text--title">${property.name}</p>
                        <p class="property-card__text--price">${property.price}</p>
                        <p class="property-card__text--attrs">${property.detail}</p>
                    </div>
                </a>
            </div>
        `;
}

function renderProperties(properties) {
  const row = document.getElementById("featuredPropertiesRow");
  row.innerHTML = properties.map(createPropertyCardHTML).join("");
}

renderProperties(properties);
