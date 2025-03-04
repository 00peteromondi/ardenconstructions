document.addEventListener('DOMContentLoaded', function() {
   
    const navbarLinks = document.querySelectorAll('.navbar a');

    function onScroll() {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        navbarLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            const offset = 100; // Adjust this value for the desired padding
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

    onScroll();
   
});