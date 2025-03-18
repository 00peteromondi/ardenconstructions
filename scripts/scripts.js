document.addEventListener('DOMContentLoaded', function() {
   
    const navbarLinks = document.querySelectorAll('.navbar a');

    function onScroll() {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        navbarLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            const offset = 10; // Adjust this value for the desired padding
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
const text = ["Quality, Durable Products", "On Site Transportation", "Flexible Pricing", "Guaranteed Client Satisfaction"];
let counter = 0;

setInterval(change, 5000);

function change() {
  document.getElementById("fadeEl").setAttribute("class", "text-fade");

  setTimeout(() => {
    document.getElementById("fadeEl").innerHTML = text[counter];
    document.getElementById("fadeEl").setAttribute("class", "text-show");
  }, 1000)

  counter++;

  if (counter >= text.length) {
    counter = 0;
  }
}
function toggleHeaderSocials() {
    const aboutSection = document.querySelector('#about');
    const headerSocials = document.querySelector('#header-socials');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const offset = 10; // Adjust this value for the desired padding

    if (aboutSection.offsetTop - offset <= scrollPos && aboutSection.offsetTop + aboutSection.offsetHeight - offset > scrollPos) {
        headerSocials.style.display = 'none';
    } else {
        headerSocials.style.display = 'block';
    }
}

window.addEventListener('scroll', toggleHeaderSocials);
toggleHeaderSocials();
function toggleNavbarToggle() {
    const targetSection = document.querySelector('section');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const offset = 10; // Adjust this value for the desired padding

    if (targetSection.offsetTop - offset <= scrollPos && targetSection.offsetTop + targetSection.offsetHeight - offset > scrollPos) {
        navbarToggle.classList.add('active');
    } else {
        navbarToggle.classList.remove('active');
    }
}

window.addEventListener('scroll', toggleNavbarToggle);
toggleNavbarToggle();

function toggleDiv(id, link) {
    var e = document.getElementById(id);
    var allDivs = document.querySelectorAll('#services .content');
    
    allDivs.forEach(div => {
        if (div !== e) {
            div.style.display = 'none';
            var associatedLink = document.querySelector(`#services a[href="javascript:void(0);"][onclick*="${div.id}"]`);
            if (associatedLink) {
                associatedLink.innerHTML = "View More";
            }
        }
    });

    if (e.style.display == null || e.style.display == "none") {
        e.style.display = "block";
        link.innerHTML = "View Less";
    } else {
        e.style.display = "none";
        link.innerHTML = "View More";
    }
}

// Example usage in services.html
// <a href="javascript:void(0);" onclick="toggleDiv('serviceDetails', this)">Show More</a>
// <div id="serviceDetails" style="display:none;">
//     <!-- Service details content here -->
// </div>