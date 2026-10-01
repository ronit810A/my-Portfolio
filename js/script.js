
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* Toggle Mobile Menu */
menuToggle.addEventListener("click", function () {

  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

});


/* Close Menu After Clicking Link */
document.querySelectorAll(".nav a").forEach(function (link) {

  link.addEventListener("click", function () {

    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");

  });

})




// nav-header background chane after 100px scrole

window.addEventListener("scroll", function () {
  const header = document.getElementById("nav-header");

  if (window.scrollY > 20) {
    header.classList.add("header-white");
  } else {
    header.classList.remove("header-white");
  }
});











document.addEventListener("DOMContentLoaded", function () {

    const processSection = document.querySelector(".process-stack");

    if (!processSection) return;

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    processSection.classList.add("active");

                } else {

                    processSection.classList.remove("active");

                }

            });

        },
        {
            threshold: 0.25
        }
    );

    observer.observe(processSection);

});






$(document).ready(function () {

    $('.about-slider-section').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 700,

        slidesToShow: 3,
        slidesToScroll: 1,

        arrows: false,
        dots: false,

        pauseOnHover: false,
        pauseOnFocus: false,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
