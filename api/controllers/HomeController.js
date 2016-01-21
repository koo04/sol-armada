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
        if(err) {console.log("Forum went down"); data.forum = false; return res.view('homepage', { data: data });}
        data.forum = true;
        for(var i=0; i<articals.length; i++) {
          if(articals[i].title == '[[topic:topic_is_deleted]]')
            articals.splice(i);
        }

        data.news = articals;

        return res.view("homepage", { data: data });
      });
    });
  }
}