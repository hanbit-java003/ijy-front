require('../less/artist.less');
require('./common');

$('.artist-tab-btn > li').on('click', function () {
    var tabIndex = $(this).index();

    var tabBtn = $(this).parent('.artist-tab-btn').find('li');
    tabBtn.removeClass('active');
    $(tabBtn[tabIndex]).addClass('active');

    var tabImg = $(this).parents('.artist-tab-container').find('.artist-tab-img > li');
    tabImg.removeClass('active');
    $(tabImg[tabIndex]).addClass('active');
});

$.ajax({
    url: '/api/artist/'
});

var artistTemplate = require('../template/artist-list.hbs');
var artistHtml = artistTemplate();