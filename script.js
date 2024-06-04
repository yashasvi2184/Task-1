document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#333'; /* Darker background when scrolled */
        } else {
            navbar.style.backgroundColor = '#1a1a1a'; /* Original background color */
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = '#ffeb3b'; /* Yellow text on hover */
        });

        link.addEventListener('mouseout', function () {
            this.style.color = '#f2f2f2'; /* Revert to original text color */
        });
    });
});
