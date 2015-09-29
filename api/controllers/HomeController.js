var feed = require("feed-read");

module.exports = {
  home: function (req, res) {
    var data = {};
    var user = {};
    
    feed("http://forum.solarmada.com/topic/2.rss", function(err, articals) {
      if(err) return res.json({ message: err });
      
      data.news = articals;
      
      return res.view("homepage", { data: data, user: user });
    });
  }
}