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
        var eDate = events[i].title.match(/\[(.*?)\]/);
        var eDateSplit = eDate[1].split('&#x2F;');
        var date = new Date(parseInt("20" + eDateSplit[2]), parseInt(eDateSplit[0])-1, parseInt(eDateSplit[1]));
        events[i].date = date;
        
        if(events[i].title == '[[topic:topic_is_deleted]]')
          events.splice(i);
      }
      
      events.sort(function(a,b) {
        console.info(a.date);
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      
      data.events = events;
      
      return res.view("calendar", { data: data });
    });
  }
}