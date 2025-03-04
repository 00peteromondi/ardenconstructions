document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    function onScroll() {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        navbarLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            const offset = 120; // Adjust this value for the desired padding
            if (section.offsetTop - offset <= scrollPos && section.offsetTop + section.offsetHeight - offset > scrollPos) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function onClick(event) {
        navbarLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }

    navbarLinks.forEach(link => {
        link.addEventListener('click', onClick);
    });

    window.addEventListener('scroll', onScroll);

    // Call onScroll initially to set the active class based on the initial scroll position
    onScroll();
    // Adjust scroll position to avoid hiding content behind the navbar
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            const offset = 150; // Same offset value as in onScroll function
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    }
});