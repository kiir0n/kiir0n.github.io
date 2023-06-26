/*var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.match(/mobile|iphone|ipad|android/)) {
  document.body.style.backgroundImage = 'url(images/kiaheartonfire.png)';
}*/
// Function to toggle the active state of the navigation menu
function toggleNav() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Event listeners for button clicks
document.getElementById('homeBtn').addEventListener('click', function() {
    scrollToSection('home-section');
});

document.getElementById('projectsBtn').addEventListener('click', function() {
    scrollToSection('projects-section');
});

document.getElementById('favBtn').addEventListener('click', function() {
    scrollToSection('songs-section');
});
