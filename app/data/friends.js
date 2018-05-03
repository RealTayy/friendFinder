module.exports = 
function Friends() {
    this.findFriend = function (answers) {
        var bestCompatibility = 40;
        var bestIndex = 0;
        this.friendData.forEach((el, i) => {
            var curCompatibility = this.findCompatibility(answers, el.score);
            if (bestCompatibility !== Math.min(bestCompatibility, curCompatibility)) {
                bestCompatibility = Math.min(bestCompatibility, curCompatibility);
                bestIndex = i;
            }
        });
        return (this.friendData[bestIndex]);
    }
    this.findCompatibility = function (answers, score) {
        let curCompatibility = 0;        
        answers.forEach((el, i) => {
            curCompatibility += Math.abs(el - score[i]);
        });
        return curCompatibility;
    }
    this.friendData = [
        {
            'name': 'Chris Pratt',
            'image': 'https://pbs.twimg.com/profile_images/984291230174543872/pjBsbWko_400x400.jpg',
            'score': [4, 5, 4, 1, 1, 3, 1, 5, 3, 3]
        },
        {
            'name': 'Jason Statham',
            'image': 'https://www.famousbirthdays.com/headshots/jason-statham-4.jpg',
            'score': [3, 1, 5, 4, 4, 5, 3, 3, 5, 1]
        },
        {
            'name': 'Josh Brolin',
            'image': 'https://pmcdeadline2.files.wordpress.com/2017/10/josh-brolin.jpg?w=605',
            'score': [1, 2, 2, 5, 5, 4, 4, 4, 4, 2]
        },
        {
            'name': 'Ryan Gosling',
            'image': 'https://akns-images.eonline.com/eol_images/Entire_Site/20171010/rs_600x600-171110174406-600.Ryan-Gosling-Hot.ms.111017.jpg?fit=around|300:300&crop=300:300;center,top&output-quality=90',
            'score': [2, 3, 1, 3, 3, 1, 5, 5, 1, 5]
        },
        {
            'name': 'Ryan Reynolds',
            'image': 'https://media1.popsugar-assets.com/files/thumbor/C3DFcMy5AIYxcUxohHN_SwKNMdM/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2016/04/20/830/n/24155406/d65ad816_edit_img_image_41007728_1461169762_thumb/i/Ryan-Reynolds-Funny-Parenting-Tweets.jpg',
            'score': [5, 4, 3, 2, 2, 2, 2, 2, 2, 4]
        },
    ]
};