$(document).ready(function () {
    // Initial animation
    $('#black-ball').animate({ top: '-25px' }, 0, 'easeOutCubic', function () {
        $('#black-ball').animate({ top: '50%' }, 2000, 'easeOutBounce', function () {
            $('#black-ball').animate({ height: '2500px', width: '2500px' }, 500, 'easeInCubic');
        })
    })

    
});