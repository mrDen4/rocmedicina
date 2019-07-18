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
        $('.popup-buy').removeClass('popup-buy--active');
        $('.bg').removeClass('bg--active');
        $('.bg').removeClass('bg--active-popup');
    });

    // Появление popup окна по клику на кнопку
    $('.hero .btn, .service .callback__btn-buy, .footer .footer__right .right__btn').on('click', function () {
        $('.popup-buy').toggleClass('popup-buy--active');
        $('.bg').toggleClass('bg--active-popup');
    });

    // $('.products .products__list .list__item--tab').on('click', function () {
    //     if ($('.products .products__list .list__item').hasClass('list__item--active')) {
    //         $('.products .products__list .list__item').removeClass('list__item--active');
    //         $('.products .products__list .list__item').children('.item__links').removeClass('item__links--active');
    //         $('.products .products__list .list__item').children('.item__btn').removeClass('item__btn--active');
    //     }
    //     if ($(this).hasClass('list__item--active')) {
    //         $(this).removeClass('list__item--active');
    //         $(this).children('.item__links').removeClass('item__links--active');
    //         $(this).children('.item__btn').removeClass('item__btn--active');
    //     } else {
    //         $(this).addClass('list__item--active');
    //         $(this).children('.item__links').addClass('item__links--active');
    //         $(this).children('.item__btn').addClass('item__btn--active');
    //     };
    // });

    // Вывод услуг в виде popup окна
    $('.products .products__list .list__item .item__btn').on('click', function() {
        $(this).closest('.list__item--tab').addClass('list__item--active');
        $('.bg').toggleClass('bg--active-popup');
    });

    $('.products .products__list .list__item .item__exit').on('click', function() {
        $(this).closest('.list__item--tab').removeClass('list__item--active');
        $('.bg').toggleClass('bg--active-popup');
    });

    // Раскрывание эл-ов в прайс-листе
    $('.price .price__list .item__btn').on('click', function () {
        $(this).next('.item__block').addClass('item__block--active');
    });
});