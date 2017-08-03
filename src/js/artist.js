require('../less/artist.less');
require('./common');

var URLSearchParams = require('url-search-params');

var params = new URLSearchParams(location.search);
var musicId = params.get('id');

function addTabEvent() {
    $('.artist-tab-btn > li').on('click', function () {
        var tabIndex = $(this).index();

        var tabBtn = $(this).parent('.artist-tab-btn').find('li');
        tabBtn.removeClass('active');
        $(tabBtn[tabIndex]).addClass('active');

        var tabImg = $(this).parents('.artist-tab-container').find('.artist-tab-img > li');
        tabImg.removeClass('active');
        $(tabImg[tabIndex]).addClass('active');
    });
}

$.ajax({
    url: '/api/artist',
    success: function (result) {
        initArtist(result)
    }
});

$.ajax({
    url: '/api/' + musicId,
    success: function (resultt) {
        initMusic(resultt)
    }
});

var templateName = require('../template/artist-list-name.hbs');
var templateImg = require('../template/artist-list-img.hbs');

function initArtist(artistList) {

    for (var i=0; i<artistList.length; i++) {
        var htmlName = templateName(artistList[i]);
        $('.artist-tab-btn').append(htmlName);

        var htmlImg = templateImg(artistList[i]);
        $('.artist-tab-img').append(htmlImg);
    }

    $('.artist-tab-btn > li:first-child').addClass('active');
    $('.artist-tab-img > li:first-child').addClass('active');

    addTabEvent();
}


function initMusic(musicList) {

    for (var i=0; i<musicList.length; i++) {
        var htmlName = templateName(musicList[i]);
        $('.artist-tab-btn').append(htmlName);

        var htmlSummary = templateImg(musicList[i]);
        $('.artist-tab-img').append(htmlSummary);
    }

    $('.artist-tab-btn > li:first-child').addClass('active');
    $('.artist-tab-img > li:first-child').addClass('active');
}
