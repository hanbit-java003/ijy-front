var menus = require('./model/main/menu-name.js');

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
    var menuId = $(this).attr('menu-id');
    var subId = $(this).attr('sub-id');

    /*location.href = '/exhibitions.html?id=' + menuId;*/
    location.href = '/' + menuId + '.html' + (subId ? '?id=' + subId : '');
});

/*$('.header-menu-text').on('click', function () {
   var menuId = $(this).attr('menu-head');
   location.href = '/' + menuId + '.html';
});*/

$('.header-menu-text').on('click', function () {
   var menuId = $(this).parent($('.header-menu')).find($('.header-sub-menu > li:first-child')).attr('menu-id');
   var subId = $(this).parent($('.header-menu')).find($('.header-sub-menu > li:first-child')).attr('sub-id');

   if (!menuId) {
       var menuHead = $(this).attr('menu-head');
       location.href = '/' + menuHead + '.html';
   }
   else {
       location.href = '/' + menuId + '.html' + (subId ? '?id=' + subId : '');
   }
});

$('.header-menu > li').on('mouseover', function () {
    $(this).find('.header-sub-menu').fadeIn(150);
});

$('.header-menu > li').on('mouseleave', function () {
    $(this).find('.header-sub-menu').fadeOut(3);
});
