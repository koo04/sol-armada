module.exports = {
  sounds: function(req, res) {
    return res.view('sounds', { user: req.user, data: req.data });
  }
}