// Welcome Page Transition
document.getElementById("next-button").addEventListener("click", function() {
    document.getElementById("welcome-screen").style.display = "none"; // Hide Welcome Page
    
    let mainContent = document.getElementById("main-content");
    mainContent.style.display = "block"; // Ensure it's visible
    setTimeout(() => {
        mainContent.classList.add("show"); // Trigger animation
    }, 100); // Small delay to allow CSS transition to work
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode is already enabled in local storage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Dark mode toggle event
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save dark mode state in local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

// Section Fade-In Animation on Scroll
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('fade-in');
            section.classList.add('show'); // Add show class to trigger animation
        }
    });
};

// Run the animation function when scrolling
window.addEventListener('scroll', fadeInOnScroll);

// Trigger the animation on page load
fadeInOnScroll();
