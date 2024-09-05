let menu = document.querySelector('#menu-ico');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 450, origin: 'left' });

// Apply the same animation to the about, meet, and services sections
sr.reveal('.about-text', { delay: 200, origin: 'top' });
sr.reveal('.about-img', { delay: 450, origin: 'top' });
sr.reveal('.meet-text', { delay: 200, origin: 'top' });
sr.reveal('.team', { delay: 450, origin: 'top' });
sr.reveal('.services-text', { delay: 200, origin: 'top' });
sr.reveal('.services-list', { delay: 450, origin: 'top' });

// Scroll Down
const scrollDownIcon = document.querySelector('.scroll-down i');
const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;

scrollDownIcon.onclick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
};