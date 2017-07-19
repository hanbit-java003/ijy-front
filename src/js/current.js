require('bootstrap');
require('../less/current.less');
require('../less/common.less');

var common = require('./common.js');

var contents = require('./model/menus/exhibition');
var template = require('../template/img-contents.hbs');

function initSlider() {
    for (var i=0; i<contents.length; i++) {
        var html = template(contents[i]);

        $('.exhibition-contents').append(html);
    }

    $('.exhibition-contents > li:first-child').addClass('active');
}

initSlider();

$('.btn-slide').on('click', function () {
    var count = $('.exhibition-contents > li').length;
    var index = $('.exhibition-contents > li.active').index();
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

    $('.exhibition-contents > li').removeClass('active');
    $($('.exhibition-contents > li')[nextIndex]).addClass('active');
});