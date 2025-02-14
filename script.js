// Welcome Page Transition
document.getElementById("next-button").addEventListener("click", function() {
    document.getElementById("welcome-screen").style.display = "none"; // Hide welcome screen
    document.getElementById("main-content").classList.remove("hidden"); // Show main content
    document.getElementById("main-content").classList.add("fade-in", "show"); // Add fade-in effect
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

// Fade-In Animation on Scroll
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('fade-in', 'show');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();
