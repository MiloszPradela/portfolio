/*---------------------  switch do icon -------------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*========================= sekcja zmian linków ========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*------------------------- navbar sec -------------------------*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /*------------- usuniecie ikony przełączenia i paska nawigacja po kliku scrolla -----------------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*----------------------------- scroller sec ---------------------------*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.firstsection-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*----------------------------- text-changer from gh ---------------------------*/

const typed = new Typed('.text-changer', { 
    strings: ['Computer Science Student', 'Frontend Developer', 'Traveller'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

