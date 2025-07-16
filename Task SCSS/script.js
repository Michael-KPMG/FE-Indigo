// Kerala Districts Data
const keralaDistricts = [
  {
    name: "Thiruvananthapuram",
    description: "Known for its beaches and historic landmarks.",
    image: "https://gaviya.com/wp-content/uploads/2024/07/Thiruvananthapuram-one-day-City-Tour.jpg",
    buttonType: "primary"
  },
  {
    name: "Kollam",
    description: "A city known for its cashew industry.",
    image: "https://avathioutdoors.gumlet.io/travelGuide/dev/kollam_P8520.jpg",
    buttonType: "secondary"
  },
  {
    name: "Pathanamthitta",
    description: "Famous for pilgrimage to Sabarimala.",
    image: "https://www.dtpcpathanamthitta.com/uploads/picture_gallery/gallery_images/adavi-ecotourism-centre-pathanamthitta-8-20230508114959992569.webp",
    buttonType: "accent"
  },
  {
    name: "Alappuzha",
    description: "Known as the 'Venice of the East'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    buttonType: "primary"
  },
  {
    name: "Kottayam",
    description: "Famous for its rubber plantations.",
    image: "https://www.keralatourism.org/images/enchanting_kerala/large/illickal_kallu20220103142808_1152_1.jpg",
    buttonType: "secondary"
  },
  {
    name: "Idukki",
    description: "Known for its hills and wildlife sanctuaries.",
    image: "https://keralatourism.travel/images/destinations/places-to-visit/idukki/munnar-idukki-kerala-tourism-entry-fee-timings-holidays-reviews-small.jpg",
    buttonType: "accent"
  },
  {
    name: "Ernakulam",
    description: "The commercial hub of Kerala.",
    image: "https://bookingfree.net/image.php?path=/uploads/hotel/top_cities/01d406b3d6b89a9968e46864d7245c0d.jpg",
    buttonType: "primary"
  },
  {
    name: "Thrissur",
    description: "Known as the cultural capital of Kerala.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/vadakkunnathan-temple-thrissur-kerala-hero?qlt=82&ts=1742154006244",
    buttonType: "secondary"
  },
  {
    name: "Palakkad",
    description: "Known for its paddy fields and forts.",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/cover-Things-To-Do-In-Palakkad.jpg",
    buttonType: "accent"
  },
  {
    name: "Malappuram",
    description: "A land growing with culture and diversity.",
    image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101691-Malappuram-District.jpg",
    buttonType: "primary"
  },
  {
    name: "Kozhikode",
    description: "Famous for its history and cuisine.",
    image: "https://i0.wp.com/planashleygo.com/wp-content/uploads/2024/08/i-love-kozhikode.jpg?resize=1000%2C750&ssl=1",
    buttonType: "secondary"
  },
  {
    name: "Wayanad",
    description: "Known for its scenic beauty and tribal heritage.",
    image: "https://www.gokitetours.com/wp-content/uploads/2025/04/best-places-to-visit-in-wayanad-1200x675.webp",
    buttonType: "accent"
  },
  {
    name: "Kannur",
    description: "Famous for its handloom industry.",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/09/02151433/places-to-visit-in-kannur-shutterstock_1604282707-1200x700-compressed.jpg",
    buttonType: "primary"
  },
  {
    name: "Kasaragod",
    description: "Known for its coir products and forts.",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/12133956/Kasaragod-FEATURE-compressed.jpg",
    buttonType: "secondary"
  }
];

// Create single card HTML
function createCard(district) {
  const cardClass = district.name.toLowerCase().replace(/\s+/g, '-');
  
  return `
    <div class="card card--${cardClass}">
      <div class="card__image">
        <img src="${district.image}" alt="${district.name}" loading="lazy">
      </div>
      <div class="card__content">
        <h2 class="card__title">${district.name}</h2>
        <p class="card__description">${district.description}</p>
        <div class="card__button">
          <button class="btn btn--${district.buttonType} btn--explore">Explore</button>
        </div>
      </div>
    </div>
  `;
}

// Render all cards
function renderCards() {
  const cardGrid = document.querySelector('.cards');
  if (!cardGrid) return;

  // Create all cards and add them to the grid
  const cardsHTML = keralaDistricts.map(district => createCard(district)).join('');
  cardGrid.innerHTML = cardsHTML;
}

// Generate Wikipedia link from district name
function generateWikiLink(districtName) {
  const wikiPath = districtName.replace(/\s+/g, '_') + '_district';
  return `https://en.wikipedia.org/wiki/${wikiPath}`;
}

// Handle button clicks to open Wikipedia
function handleExploreClick(event) {
  // Get the district name from the card
  const card = event.target.closest('.card');
  const districtName = card.querySelector('.card__title').textContent;
  
  // Generate and open Wikipedia link
  const wikiLink = generateWikiLink(districtName);
  window.open(wikiLink, '_blank');
}

// Add click events to all explore buttons
function addButtonEvents() {
  const exploreButtons = document.querySelectorAll('.btn--explore');
  exploreButtons.forEach(button => {
    button.addEventListener('click', handleExploreClick);
  });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
  addButtonEvents();
});
