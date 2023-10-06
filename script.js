// Function to load a website into the iframe
function loadWebsite(url) {
    const iframe = document.getElementById('website-iframe');
    iframe.src = url;
}

// Function to handle the search functionality (you can customize this)
function searchWebsites() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.toLowerCase();
    
    // Perform your search logic here, e.g., filter thumbnails based on the search term
    const thumbnails = document.querySelectorAll('.thumbnails .thumbnail');
    
    thumbnails.forEach(thumbnail => {
        const title = thumbnail.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            thumbnail.style.display = 'block';
        } else {
            thumbnail.style.display = 'none';
        }
    });
}

// Load the initial website (you can change this URL)
loadWebsite('');

// Add an event listener for the search input
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', searchWebsites);
