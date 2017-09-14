require('bootstrap');
require('../less/press.less');
require('./common');

$.ajax({
    url: '/api/press',
    success: function (result) {
        setList(result);
    }
});

function setList(press) {
    var page = require('../template/press-table.hbs');
    var html = page(press);

    $('.press-table tbody').html(html);
}