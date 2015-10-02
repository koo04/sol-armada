var feed = require("feed-read");

module.exports = {
  calendar: function (req, res) {
    if(req.data)
      var data = req.data;
    else
      var data = {};
    
    feed("http://forum.solarmada.com/category/10.rss", function(err, events) {
      if(err) return res.json({ message: err });
      
      for(var i=0; i<events.length; i++) {
        if(events[i].title == '[[topic:topic_is_deleted]]')
          events.splice(i);
      }
      
      data.events = events;
      
      return res.view("calendar", { data: data });
    });
  }
}