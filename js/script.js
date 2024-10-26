$(document).ready(function() {
    // Инициализация слайдера для блока с отзывами
    $('.feedbacks').slick({
        slidesToShow: 1,  // Один слайд на экране
        slidesToScroll: 1,
        autoplay: true,  // Автоматическое пролистывание
        autoplaySpeed: 3000,  // Интервал пролистывания
        dots: false,  // Без точек навигации
        arrows: true,  // Использовать стрелки
        prevArrow: $('.paginator .prev'),  // Левая стрелка
        nextArrow: $('.paginator .next'),  // Правая стрелка
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,  // Один слайд для экранов меньше 1024px
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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