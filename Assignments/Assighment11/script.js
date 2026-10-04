
 //Class representing a Vacation destination.
 
class Vacation {
  /**
  * @param {string} title - Name of destination
   * @param {string} type - "Mountain" or "Beach"
   * @param {string} description - Brief summary
   * @param {string} thingsToDo - Activities available
   * @param {string} imageFile - Path to destination image
   * @param {string} mapSrc - Google Maps embed URL
   **/
   
  constructor(title, type, description, thingsToDo, imageFile, mapSrc) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.thingsToDo = thingsToDo;
    this.imageFile = imageFile;
    this.mapSrc = mapSrc;
  }

  
   /**
  Helper method to generate the DOM card element for this vacation.
   @returns {HTMLElement}
   **/
  getCard() {
    const cardSection = document.createElement("section");
    cardSection.classList.add("vacation-card");

    cardSection.addEventListener("click", () => {
      openVacationModal(this);
    });

    cardSection.innerHTML = `
      <div class="card-header">
        <h3>${this.title}</h3>
        <p>${this.type} Vacation</p>
      </div>
      <div class="card-image-wrapper">
        <img src="${this.imageFile}" alt="${this.title}">
      </div>
    `;

    return cardSection;
  }
}

// Array of Vacation objects featuring diverse destinations (Charleston, Tokyo, Kyoto, Maui, etc.)
const vacations = [
  new Vacation(
    "Charleston",
    "Beach",
    "A historic South Carolina port city known for cobble streets, pastel antebellum houses, coastal water views, and rich culinary culture.",
    "Walk along The Battery, visit Rainbow Row, explore historic Fort Sumter, enjoy local seafood at King Street restaurants.",
    "images/charleston.jpg",
    "https://maps.google.com/maps?q=Charleston%20SC&t=&z=12&ie=UTF8&iwloc=&output=embed"
  ),
  new Vacation(
    "Tokyo",
    "Mountain",
    "Japan’s bustling capital blending ultramodern skyscrapers, historic shrines, vibrant street culture, and easy access to Mount Fuji.",
    "Explore Shibuya Crossing, visit Senso-ji Temple in Asakusa, take a day trip to Mount Fuji, sample authentic ramen.",
    "images/tokyo.jpg",
    "https://maps.google.com/maps?q=Tokyo%20Japan&t=&z=10&ie=UTF8&iwloc=&output=embed"
  ),
  new Vacation(
    "Kyoto",
    "Mountain",
    "The cultural heart of Japan nestled among forested mountains, renowned for classical Zen gardens, bamboo groves, and historic temples.",
    "Walk through the Fushimi Inari Torii gates, stroll Arashiyama Bamboo Grove, visit Kinkaku-ji (Golden Pavilion).",
    "images/kyoto.jpg",
    "https://maps.google.com/maps?q=Kyoto%20Japan&t=&z=11&ie=UTF8&iwloc=&output=embed"
  ),
  new Vacation(
    "Maui",
    "Beach",
    "An iconic Hawaiian island famous for its world-renowned beaches, volcanic landscapes, and scenic coastal highways.",
    "Drive the scenic Road to Hana, snorkel at Molokini Crater, watch the sunrise from Haleakala summit.",
    "images/maui.jpg",
    "https://maps.google.com/maps?q=Maui%20Hawaii&t=&z=10&ie=UTF8&iwloc=&output=embed"
  ),
  new Vacation(
    "Asheville",
    "Mountain",
    "A vibrant city in North Carolina’s Blue Ridge Mountains known for historic architecture, craft breweries, and the Biltmore Estate.",
    "Tour the historic Biltmore Estate, drive along the Blue Ridge Parkway, check out downtown art galleries.",
    "images/asheville.jpg",
    "https://maps.google.com/maps?q=Asheville%20NC&t=&z=12&ie=UTF8&iwloc=&output=embed"
  ),
  new Vacation(
    "Boone",
    "Mountain",
    "A picturesque college town high in the Blue Ridge Mountains offering outdoor adventure, skiing, and mountain hiking.",
    "Go skiing at Beech Mountain, visit Appalachian State University, hike Grandfather Mountain swinging bridge.",
    "images/boone.jpg",
    "https://maps.google.com/maps?q=Boone%20NC&t=&z=12&ie=UTF8&iwloc=&output=embed"
  ),
  new Vacation(
    "Sunset Beach",
    "Beach",
    "A quiet barrier island featuring broad sand beaches, quiet tidal creeks, and pristine coastal nature reserves.",
    "Walk to the Kindred Spirit Mailbox, stroll along the ocean fishing pier, explore Bird Island Reserve.",
    "images/sunset-beach.jpg",
    "https://maps.google.com/maps?q=Sunset%20Beach%20NC&t=&z=12&ie=UTF8&iwloc=&output=embed"
  ),
  new Vacation(
    "Pawleys Island",
    "Beach",
    "A historic lowcountry island town known for unhurried charm, sandy shorelines, and handcrafted rope hammocks.",
    "Relax in an original rope hammock, go crabbing in the salt marsh, play golf along coastal fairways.",
    "images/pawleys-island.jpg",
    "https://maps.google.com/maps?q=Pawleys%20Island%20SC&t=&z=12&ie=UTF8&iwloc=&output=embed"
  )
];

// Open modal and load vacation data
function openVacationModal(vacation) {
  document.getElementById("modal-title").innerText = vacation.title;
  document.getElementById("modal-type").innerText = vacation.type;
  document.getElementById("modal-description").innerText = vacation.description;
  document.getElementById("modal-things-to-do").innerText = vacation.thingsToDo;
  document.getElementById("modal-map").src = vacation.mapSrc;

  document.getElementById("vacation-modal").style.display = "block";
}

// Close modal and reset map iframe source
function closeVacationModal() {
  document.getElementById("vacation-modal").style.display = "none";
  document.getElementById("modal-map").src = "";
}

// Populate gallery DOM dynamically
function displayVacations() {
  const galleryContainer = document.getElementById("vacation-gallery");
  galleryContainer.innerHTML = "";

  vacations.forEach(vacation => {
    galleryContainer.appendChild(vacation.getCard());
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  displayVacations();

  document.getElementById("close-modal-btn").addEventListener("click", closeVacationModal);

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("vacation-modal");
    if (event.target === modal) {
      closeVacationModal();
    }
  });
});