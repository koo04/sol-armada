module.exports = {
  select: function (req, res) {
    var data;
    var selected = req.params.page;
    
    if(selected == "test")
      return res.view("test", { data: data });
    
    if(selected == "paper")
      return res.view("paper", { data: data });
  }
}