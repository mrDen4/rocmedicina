$(document).ready(function () {
    $('.header__menu').on('click', function () {
        $('.header__menu-list').toggleClass('header__menu-list--active');
        $('.menu__img--open').toggleClass('menu__img--open--active');
        $('.menu__img--exit').toggleClass('menu__img--exit--active');
        $('.bg').toggleClass('bg--active');
    });
    
    $('.bg').on('click', function () {
        $('.header__menu-list').removeClass('header__menu-list--active');
        $('.menu__img--exit').toggleClass('menu__img--exit--active');
        $('.menu__img--open').toggleClass('menu__img--open--active');
        $('.bg').removeClass('bg--active');
    });
});