require('bootstrap');
require('./common.js');
require('../less/exhibitions.less');

$.ajax({
   url: 'api/exhibition/past',
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