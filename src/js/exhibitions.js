require('bootstrap');
require('./common.js');
require('../less/exhibitions.less');

function initExhibitions() {
    var template = require('../template/sub-ex.hbs');
    var subEx = require('./model/exhibitions/sub-ex');

    for (var i=0; i<subEx.length; i++) {
        var html = template(subEx[i]);

        $('.exhibition-templates').append(html);
    }
}

initExhibitions();