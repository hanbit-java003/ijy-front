require('bootstrap');
require('./common.js');
require('../less/exhibitions.less');

var URLSearchParams = require('url-search-params');

var params = new URLSearchParams(location.search);
var exId = params.get('id');

$.ajax({
   url: '/api/exhibitions/' + exId,
    success: function (result) {
        initExhibitions(result)
    }
});

function initExhibitions(subEx) {
    var template = require('../template/sub-ex.hbs');

    for (var i=0; i<subEx.length; i++) {
        var html = template(subEx[i]);

        $('.exhibition-templates').append(html);
    }
}