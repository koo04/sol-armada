module.exports = {
  home: function (req, res) {
    var data = {};
    var user = {};
    res.view("homepage", { data: data, user: user });
  }
}