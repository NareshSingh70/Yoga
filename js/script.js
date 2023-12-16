$('.owl-carousel-mini').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        600: {
            items: 3
        },
        1024: {
            items: 4,
        },
        1366: {
            items: 5
        }
    }
})

$('.owl-carousel-review').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
            items: 2
        },
        1320: {
            items: 3
        }
    }
})

//Bottom to top
const scrollbtn = document.querySelector('.scroll');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollbtn.style.display = "block";
    }
    else {
        scrollbtn.style.display = "none";
    }
});

scrollbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

// Navbar
// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 720) {
//         $(".bootsnav").addClass("darkHeader");
//     } else {
//         $(".bootsnav").removeClass("darkHeader");
//     }
// });

// Navbar
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 720) {

        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

//Nav links
const activePage = window.location;
// console.log(activePage.pathname);
const navLink = document.querySelectorAll('nav a').
    forEach(link => {
        if (link.href.includes(`${activePage}`)) {
            // console.log(`${activePage}`);
            link.classList.add('active');
        }
    })


