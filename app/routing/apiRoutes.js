var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    })

    app.post('/api/friends', (req, res) => {
        var data = req.body;
        console.log(data);
        // Do something with the data send here as a result of the survey?
    });
};