// Load marked.js for Markdown (or use a lightweight parser)
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
document.head.appendChild(script);

// Function to load and render a file
async function loadContent(filePath, containerId) {
    try {
        const response = await fetch(filePath);
        const text = await response.text();
        const html = marked.parse(text);  // Parse Markdown to HTML
        document.getElementById(containerId).innerHTML = html;
    } catch (err) {
        console.error('Error loading content:', err);
    }
}

// On page load, check which page we're on
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('services.html')) {
        // Load all services (loop over files or fetch a list if needed)
        loadContent('content/services/haircut.md', 'services-container');  // Example; extend for multiple
    } else if (window.location.pathname.includes('about.html')) {
        loadContent('content/about.md', 'about-container');
    }
});