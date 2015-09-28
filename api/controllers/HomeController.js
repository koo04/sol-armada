var feed = require("feed-read");

module.exports = {
  home: function (req, res) {
    var data = {};
    var user = {};
    // http://204.27.57.106/topic/2.rss
    
    feed("http://204.27.57.106/topic/2.rss", function(err, articals) {
      if(err) return res.json({ message: err });
      
      data.news = articals;
      
      return res.view("homepage", { data: data, user: user });
    });
  }
}