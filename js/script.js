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

document.addEventListener('DOMContentLoaded', function() {
    // Находим все дропдауны на странице
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        var button = dropdown.querySelector('.dropdown-toggle');
        var menu = dropdown.querySelector('.dropdown-menu');

        // Обработчик клика по кнопке дропдауна
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            menu.classList.toggle('show');
        });

        // Закрытие дропдауна при клике вне его
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                menu.classList.remove('show');
            }
        });

        // Обработка выбора элемента из дропдауна
        var items = menu.querySelectorAll('.dropdown-item');
        items.forEach(function(item) {
            item.addEventListener('click', function() {
                button.textContent = this.textContent;
                menu.classList.remove('show');
            });
        });
    });
});