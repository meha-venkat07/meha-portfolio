
// Select the button and the iframe
const resumeBtn = document.getElementById('resumeBtn');
const resumeViewer = document.getElementById('resumeViewer');

// Add click event listener to the button
resumeBtn.addEventListener('click', function() {
    if (resumeViewer.style.display === 'none' || resumeViewer.style.display === '') {
        resumeViewer.style.display = 'block'; // Show the resume
    } else {
        resumeViewer.style.display = 'none'; // Hide the resume
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
