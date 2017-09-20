var slides = [{
    img: './img/detail-2.jpg'
}, {
    img: './img/detail-3.jpg'
}, {
    img: './img/detail-4.jpg'
}];

var carousel = $('.main-carousel');

var timer;

var currentSlideIndex = 0; // 현재 보이는 index

var animating = false;


function slide(dirt) {
    animating = true;
    clearTimeout(timer);

    var currentSlide = slides[currentSlideIndex];
    var nextSlide;

    if (dirt === 'left') {
        nextSlide = slides[++currentSlideIndex];

        if(!nextSlide) {
            currentSlideIndex = 0;
            nextSlide = slides[currentSlideIndex];
        }
    }
    else if (dirt === 'right') {
        nextSlide = slides[--currentSlideIndex];

        if(!nextSlide) {
            currentSlideIndex = slides.length - 1;
            nextSlide = slides[currentSlideIndex];
        }
    }

    var currentEmt = carousel.find('li');
    var nextEmt = $('<li></li>');
    nextEmt.css('background-image', 'url(' + nextSlide.img + ')');

    var animationLeft;

    if (dirt === 'left') {
        nextEmt.css('left', '100%');
        animationLeft = '-=100%';
    }

    else if (dirt === 'right') {
        nextEmt.css('left', '-100%');
        animationLeft = '+=100%';
    }

    carousel.append(nextEmt);

    carousel.find('li').animate({
        left: animationLeft
    }, {
        duration: 700,
        complete: function () {
            currentEmt.remove();
            animating = false;

            if (this === currentEmt[0]) {
                return;
            }

            timer = setTimeout(function () {
                slide('left')
            }, 4000);
        }
    });
}

slide('left');

$('.btn-slide').on('click', function () {
    if (animating) {
        return;
    }

    if ($(this).hasClass('left')) {
        slide('left');
    }
    else if ($(this).hasClass('right')) {
        slide('right');
    }
});
