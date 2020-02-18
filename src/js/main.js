$(document).ready(function () {
    // Вывод меню
    $('.header__menu').on('click', function () {
        $('.header__menu-list').toggleClass('header__menu-list--active');
        $('.menu__img--open').toggleClass('menu__img--open--active');
        $('.menu__img--exit').toggleClass('menu__img--exit--active');
        $('.bg').toggleClass('bg--active');
    });

    // Затемненный фон, по которому можно убрать окна итп
    $('.bg').on('click', function () {
        $('.header__menu-list').removeClass('header__menu-list--active');
        $('.menu__img--exit').removeClass('menu__img--exit--active');
        $('.menu__img--open').removeClass('menu__img--open--active');
        $('.products .products__list .list__item').removeClass('list__item--active');
        $('.popup-delivery').removeClass('popup-delivery--active');
        $('.popup-job').removeClass('popup-job--active');
        $('.popup-buy').removeClass('popup-buy--active');
        $('.bg').removeClass('bg--active');
        $('.bg').removeClass('bg--active-popup');
    });

    // Появление popup окна по клику на кнопку
    $('.hero .btn, .service .callback__btn-buy, .footer .footer__right .right__btn').on('click', function () {
        $('.popup-buy').toggleClass('popup-buy--active');
        $('.bg').toggleClass('bg--active-popup');
    });

    // Вывод услуг в виде popup окна
    $('.products .products__list .list__item .item__btn').on('click', function () {
        $(this).closest('.list__item--tab').addClass('list__item--active');
        $('.bg').toggleClass('bg--active-popup');
    });

    $('.products .products__list .list__item .item__exit').on('click', function () {
        $(this).closest('.list__item--tab').removeClass('list__item--active');
        $('.bg').toggleClass('bg--active-popup');
    });

    $('.result .license__slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.result .result__license .license__btn--left'),
        nextArrow: $('.result .result__license .license__btn--right')
    });

    // Раскрывание эл-ов в прайс-листе
    $('.price .price__list .item__btn').on('click', function () {
        if ($(this).next('.item__block').hasClass('item__block--active')) {
            $(this).next('.item__block').toggleClass('item__block--active');
            return;
        }

        if ($('.item__block').hasClass('item__block--active')) {
            $('.item__block').removeClass('item__block--active');
            $(this).next('.item__block').toggleClass('item__block--active');
        } else {
            $(this).next('.item__block').toggleClass('item__block--active');
        }
    });

    // Cлайдер для отзывов
    $('.reviews .reviews__slider').slick({
        dots: true,
        dotsClass: 'slider__dots',
        arrows: false
    });

    //Popup "Как добраться"
    $('.contacts .contacts__btn').on('click', function () {
        $('.popup-delivery').addClass('popup-delivery--active');
        $('.bg').addClass('bg--active');
    });

    $('.popup-delivery .delivery__exit').on('click', function () {
        $('.popup-delivery').removeClass('popup-delivery--active');
        $('.bg').removeClass('bg--active');
    });

    //Popup "Отправить резюме"
    $('.jobs .jobs__list .jobs__item .item__btn--job, .callback__btn-job').on('click', function () {
        $('.popup-job').addClass('popup-job--active');
        $('.bg').addClass('bg--active');
    });

    $('.popup-job .job__exit').on('click', function () {
        $('.popup-job').removeClass('popup-job--active');
        $('.bg').removeClass('bg--active');
    });
});