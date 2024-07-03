function createGallery(pict, index) {
  return `
        <div class="gallery__item gallery__item--${index}" data-fancybox="gallery" data-src="${pict.img}">
            <img src="${pict.img}" alt="${pict.name}" class="gallery__img">
        </div>
`;
}

function createAmenities(amenity) {
  return `
     <div class="detail__left-col col-6 col-sm-4">
                        <div class="detail__left-section">
                            <img class="detail__left-section-svg" src="./assets/svg/${amenity.img}.svg" alt="${amenity.img}">
                            <p class="detail__left-section-name">${amenity.name}</p>
                        </div>
                    </div>
        `;
}

function createKeyDetails(detail) {
  return `
       <div class="detail__left-col col-6">
                        <div class="detail__left-section">
                            <p class="detail__left-section-title">${detail.name}</p>
                            <p class="detail__left-section-value">${detail.value}</p>
                        </div>
                    </div>
        `;
}

function renderGallery(detailPict) {
  const row = document.getElementById("galleryImages");
  console.log("gallery", row);
  console.log("gallerydata", detailPict);
  row.innerHTML = detailPict
    .map((pict, index) => createGallery(pict, index))
    .join("");
}

function renderAmenities(amenities) {
  const row = document.getElementById("amenitiesRow");
  row.innerHTML = amenities.map(createAmenities).join("");
}

function renderKeyDetails(keyDetails) {
  const row = document.getElementById("keyDetailsRow");
  console.log("key", row);
  row.innerHTML = keyDetails.map(createKeyDetails).join("");
}

renderGallery(detailPict);
renderAmenities(amenities);
renderKeyDetails(keyDetails);
