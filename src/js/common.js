var menus = require('./main/menu-name.js');

function initMenu() {
    var template = require('../template/menu-name.hbs');

    for (i=0; i<menus.length; i++) {
        var menuHtml = template(menus[i]);

        $('.header-menu').append(menuHtml);
    }
}

initMenu();

$('.menu-logo').on('click', function () {
    location.href = ('./');
});

$('.header-sub-menu > li').on('click', function () {
    location.href = './greeting.html';
});

$('.header-menu > li').on('mouseover', function () {
    $(this).find('.header-sub-menu').fadeIn(150);
});

$('.header-menu > li').on('mouseleave', function () {
    $(this).find('.header-sub-menu').fadeOut(3);
});
