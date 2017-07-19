require('bootstrap');
require('../less/main.less');
require('./common');

var contents = require('./model/main/main-contents.js');
var template = require('../template/img-contents.hbs');

function initSlider() {
    for (var i=0; i<contents.length; i++) {
        var html = template(contents[i]);

        $('.main-contents').append(html);
    }

    $('.main-contents > li:first-child').addClass('active');
}

initSlider();

$('.btn-slide').on('click', function () {
    var count = $('.main-contents > li').length;
    var index = $('.main-contents > li.active').index();
    var nextIndex = index;

    if ($(this).hasClass('btn-slide-left')) {
        nextIndex = index - 1;

        if (nextIndex < 0) {
            nextIndex = count - 1;
        }
    }
    else if ($(this).hasClass('btn-slide-right')) {
        nextIndex = index + 1;

        if (nextIndex >= count) {
            nextIndex = 0;
        }
    }

    $('.main-contents > li').removeClass('active');
    $($('.main-contents > li')[nextIndex]).addClass('active');
});
