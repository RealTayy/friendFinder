$(document).ready(function () {
    // Initial animation
    $('#black-ball').animate({ top: '-25px' }, 0, 'easeOutCubic', function () {
        $('#black-ball').animate({ top: '50%' }, 1500, 'easeOutBounce', function () {
            $('#black-ball').animate({ height: '2500px', width: '2500px' }, 500, 'easeInCubic');
            $('form').animate({ opacity: 1 }, 500, 'easeInCubic');
        })
    })

    $('#the-button').click(function () {
        var answers = [];
        for (let i = 1; i < 11; i++) {
            var answer = $(`#question${i}`).val().charAt(0);
            answers.push(answer);
        }
        $.post('/api/friends', { results: answers })
            .then((res) => {
                console.log(res.name);
                console.log(res.image);
                $('#friend-name').text(res.name);
                $('#friend-image').attr('src', res.image);
            })
    });
});