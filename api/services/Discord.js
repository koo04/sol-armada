var https = require('https');

module.exports = {
  discord: function (callback) {
    var url = 'https://discordapp.com/api/servers/91981365452488704/embed.json';

    https.get(url, function(res) {
      var body = '';
      res.on('data', function(chunk) {
          body += chunk;
      });

      res.on('end', function() {
        var parsed = JSON.parse(body);
        callback(null, parsed);
      });
    }).on('error', function(e) {
        console.log('Error at getting Discord JSON: ', e);
        callback(e, null);
    });
}
};