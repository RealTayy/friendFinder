var Friends = require('../data/friends.js');

var friendData = new Friends();

module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    })

    app.post('/api/friends', (req, res) => {
        var data = req.body;        
        res.send(friendData.findFriend(data.results));        
    });
};