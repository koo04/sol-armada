var http = require('http');

module.exports = {
  discord: function () {
    var url = 'http://discordapp.com/api/servers/91981365452488704/embed.json';

    http.get(url, function(res) {
      var body = '';

      res.on('data', function(chunk) {
          body += chunk;
      });

      res.on('end', function() {
        var parsed = JSON.parse(body);
        return parsed;
//					var formatted = '';
//					var gameName = '';
//
//					for (var i = 0; i < parsed.channels.length; i++) {
//						formatted += '<li class="discord-channel">' + parsed.channels[i].name + '</li><ul>';
//						for (var j = 0; j < parsed.members.length; j++) {
//							gameName = '';
//							if (parsed.members[j].game)
//								gameName = ' - ' + parsed.members[j].game.name;
//							if (parsed.members[j].channel_id == parsed.channels[i].id) {
//								if (parsed.members[j].status != 'online') {
//									formatted += '<li class="discord-user"><img src="' + parsed.members[j].avatar_url +
//									'" class="discord-avatar"/><div class="discord-user-status discord-idle"></div>' +
//									parsed.members[j].username + '<span>' + gameName + '</span></li>';
//								} else {
//									formatted += '<li class="discord-user"><img src="' + parsed.members[j].avatar_url +
//									'" class="discord-avatar"/><div class="discord-user-status discord-online"></div>' +
//									parsed.members[j].username + '<span>' + gameName + '</span></li>';
//								}
//							}
//						}
//						formatted += '</ul>';
//					}
//
//					var discordJoin = '';
//					if (parsed.instant_invite != 'null')
//						discordJoin = '<p class="discord-join btn-primary"><a href="' + parsed.instant_invite + '">Join Server</a></p>';
//
//					rep = {
//						'discord-server-tree': formatted,
//						'discord-users-online': 'Users Online: ' + parsed.members.length,
//						'discord-join': discordJoin,
//					};
//
//					var x;
//					for(x in rep){
//						if(rep.hasOwnProperty(x)){
//							pre = pre.replace(new RegExp('{{'+x+'}}', 'g'), rep[x]);
//						}
//					}
//
//					callback(null, pre);
      });
    }).on('error', function(e) {
        console.log('Got error: ', e);
//				callback(null, 'ERROR!');
    });
}

//		getJson(widget);
};