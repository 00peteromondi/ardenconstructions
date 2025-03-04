document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    function onScroll() {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        navbarLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
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
});