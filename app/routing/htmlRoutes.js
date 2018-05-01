var path = require('path');

var get_paths = {
    '/'         : '../public/home.html',
    '/survey'   : '../public/survey.html',
    '*'         : '../public/home.html',
};

module.exports = function (app) {
    for (let key in get_paths) {
        app.get(key, (req, res) => {
            res.sendFile(path.join(__dirname, get_paths[key]));
        });
    }
}