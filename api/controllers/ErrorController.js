module.exports = {
  404: function(res, req) {
    if(req.user)
      user = req.user;
    else
      user = {};
    
    return res.view("404", { user: user } );
  },
  
  403: function(res, req) {
    if(req.user)
      user = req.user;
    else
      user = {};
    
    return res.view("404", { user: user } );
  },
  
  500: function(res, req) {
    if(req.user)
      user = req.user;
    else
      user = {};
    
    return res.view("404", { user: user } );
  } 
}