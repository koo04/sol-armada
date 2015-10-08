var feed = require("feed-read");

module.exports = {
  home: function (req, res) {
    var discord = Discord.discord();
    console.log(discord);
    var data = {};
    
    feed("http://forum.solarmada.com/category/1.rss", function(err, articals) {
      if(err) return res.json({ message: err });
      
      for(var i=0; i<articals.length; i++) {
        if(articals[i].title == '[[topic:topic_is_deleted]]')
          articals.splice(i);
      }
      
      data.news = articals;
      
      return res.view("homepage", { data: data });
    });
  }
}