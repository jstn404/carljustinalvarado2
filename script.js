const contactContainer = document.querySelector('.contact-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const itemWidth = 220; // Width of each item (including margin)

// Update the scroll position of the contactContainer based on the current index
const updateScrollPosition = () => {
    // Calculate the new scroll position based on the current index and item width
    contactContainer.scrollLeft = currentIndex * (itemWidth + 15); // Adding gap to item width
};

// Event listener for the previous button
prevButton.addEventListener('click', () => {
    // Move to the previous item, ensuring we don't go below index 0
    if (currentIndex > 0) {
        currentIndex--;
        updateScrollPosition();
    }
});

// Event listener for the next button
nextButton.addEventListener('click', () => {
    // Total number of items
    const totalItems = contactContainer.children.length;

    // Move to the next item, ensuring we don't exceed the last item
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateScrollPosition();
    }
});

// Get modal elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('modal-close')[0];

// Add click event to all project cards
document.querySelectorAll('.projects').forEach(project => {
  project.addEventListener('click', function() {
    const imageSrc = this.getAttribute('data-image');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
  });
});

// Close modal when clicking the × button
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Close modal when clicking outside the image
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});


const scrollContainer = document.querySelector('.scroll-container');
    scrollContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollContainer.scrollBy({
        left: e.deltaY > 0 ? 100 : -100,
        behavior: 'smooth',
      });
    });

    const intro = document.getElementById("intro");
    const downButton = document.getElementById("downButton");
    const upButton = document.getElementById("upButton");

    // Scroll down to portfolio
    downButton.addEventListener("click", () => {
      intro.classList.add("hidden");
      document.body.style.overflowY = "auto"; // Enable scrolling for the portfolio
    });

    // Scroll up to intro
    upButton.addEventListener("click", () => {
      intro.classList.remove("hidden");
      document.body.style.overflowY = "hidden"; // Disable scrolling
      window.scrollTo(0, 0); // Scroll back to the top
    });