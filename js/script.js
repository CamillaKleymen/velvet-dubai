$(document).ready(function(){
    $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });
});






// document.addEventListener('DOMContentLoaded', function() {
//     var dropdowns = document.querySelectorAll('.dropdown');

//     dropdowns.forEach(function(dropdown) {
//         var button = dropdown.querySelector('.dropdown-toggle');
//         var menu = dropdown.querySelector('.dropdown-menu');

//         button.addEventListener('click', function(event) {
//             event.stopPropagation();
//             menu.classList.toggle('show');
//         });

//         document.addEventListener('click', function(event) {
//             if (!dropdown.contains(event.target)) {
//                 menu.classList.remove('show');
//             }
//         });

//         var items = menu.querySelectorAll('.dropdown-item');
//         items.forEach(function(item) {
//             item.addEventListener('click', function() {
//                 button.textContent = this.textContent;
//                 menu.classList.remove('show');
//             });
//         });
//     });
// });