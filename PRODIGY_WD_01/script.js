window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(63, 94, 251, 0.9)';
        navbar.style.padding = '10px 0'; 
    } 
    else {
        navbar.style.backgroundColor = 'rgba(63, 94, 251, 1)';
        navbar.style.padding = '15px 0'; 
    }

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-item a');
    
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});