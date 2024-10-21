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
