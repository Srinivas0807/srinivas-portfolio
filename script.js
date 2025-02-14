// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode is already enabled in local storage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Dark mode toggle event
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save dark mode state in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Section Fade-In Animation on Scroll
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('fade-in');
        }
    });
};

// Run the animation function when scrolling
window.addEventListener('scroll', fadeInOnScroll);

// Trigger the animation on page load
fadeInOnScroll();
