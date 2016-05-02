var request = require('request');

module.exports = {
  discord: function (cb) {
    var url = 'https://discordapp.com/api/servers/91981365452488704/widget.json';

    request(url, function (err, res, body) {
      cb(null, JSON.parse(body));
    });
  }
};
