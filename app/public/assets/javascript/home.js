$(document).ready(function () {
    $('#white-block').animate({
        // width: '+100vh',
        height: '310px'
    }, 500, 'easeOutCubic', function () {
        $('#white-block').animate({
            width: '310px'
        }, 500, 'easeOutCubic', function () {
            $('#title-container').animate({
                opacity: 1
            }, 500, 'easeInOutQuad');
        });
    });
    $('.title-button').on('click', function () {        
        $('#white-block').animate({
            height: '100vh'
        }, 500, 'easeOutCubic', function () {
            $('#white-block').animate({
                width: '100vw'
            }, 500, 'easeOutCubic');
        });
        $('#title-container').animate({
            top: '-150px'
        }, 1000, 'easeInBack', function () {
            // window.location.href = "/survey";
        });
    })
});