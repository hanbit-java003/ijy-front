require('../less/contact.less');
require('./common');

$('#btn-send').on('click', function () {
    contact();
});

function contact() {
    var name = $('#contact-name').val().trim();
    var email = $('#contact-email').val().trim();
    var title = $('#contact-title').val().trim();
    var message = $('#contact-text').val().trim();

    if (!name) {
        alert('성함을 입력해주세요');
        $('#contact-name').focus();
        return;
    }
    else if (!email) {
        alert('이메일을 입력해주세요');
        $('#contact-email').focus();
        return;
    }
    else if (!title) {
        alert('제목을 입력해주세요');
        $('#contact-title').focus();
        return;
    }
    else if (!message) {
        alert('내용을 입력해주세요');
        $('#contact-text').focus();
        return;
    }

    $.ajax({
        url: '/api/contact',
        method: 'POST',
        data: {
            name: name,
            email: email,
            title: title,
            message: message
        },
        success: function (result) {
            alert('정상적으로 처리되었습니다');
            location.reload();
        }
    });
}