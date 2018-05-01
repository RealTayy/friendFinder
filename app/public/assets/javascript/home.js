$(document).ready(function () {
    // Initial Loading Animation
    $('#white-block').animate({ height: '310px' }, 500, 'easeOutCubic', function () {
        $('#white-block').animate({ width: '310px' }, 500, 'easeOutCubic', function () {
            $('#title-container').animate({ opacity: 1 }, 500, 'easeInOutQuad');
        });
    });

    // Direct to survey animation
    $('.title-button').on('click', function () {
        $('#white-block').animate({ height: '100vh' }, 500, 'easeOutCubic', function () {
            $('#white-block').animate({ width: '100vw' }, 500, 'easeOutCubic');
        });
        $('#title-container').animate({ top: '-150px' }, 1000, 'easeInBack', function () {
            window.location.href = "/survey";
        });
    })
});