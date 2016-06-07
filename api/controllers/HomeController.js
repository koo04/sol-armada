var feed = require("feed-read");

module.exports = {
  home: function (req, res) {
    var discord = {};
    var data = {};
    Discord.discord(function(err, json) {
      if(err) return res.json(err);
      discord = json;
      data.discord = discord;
      feed("http://forum.solarmada.com/category/1.rss", function(err, articals) {
        if(err) {sails.log.error("Error When getting Announcements",err);}
          sails.log.silly("Articals", articals);
          data.news = articals;

          return res.view("homepage", { data: data });
        });
      });
  }
};
