// module.exports = 
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
            'name': 'guy2',
            'image': 'http://via.placeholder.com/350x150',
            'score': [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        {
            'name': 'guy1',
            'image': 'http://via.placeholder.com/350x150',
            'score': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        },
    ]
};

var Friends = new Friends();
console.log(Friends.findFriend([2, 2, 5, 5, 5, 5, 5, 5, 5, 5]));

console.log("Finished");
