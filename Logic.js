// Scroll event for header background
window.onscroll = function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Scroll animations (AOS)
const elements = document.querySelectorAll('[data-aos]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-in');
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));



// JavaScript for contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        // Simulate an API call or email sending (here you can implement actual logic)
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});





