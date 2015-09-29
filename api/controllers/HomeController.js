var feed = require("feed-read");

module.exports = {
  home: function (req, res) {
    var data = {};
    var user = {};
    
    feed("http://74.91.27.227/topic/2.rss", function(err, articals) {
      if(err) return res.json({ message: err });
      
      data.news = articals;
      
      return res.view("homepage", { data: data, user: user });
    });
  }
}