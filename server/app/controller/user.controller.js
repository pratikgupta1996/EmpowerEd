let user = require('../models/user.model');
let helper = require('../Helper/common.helper');
let bcrypt = require('bcrypt');
module.exports = {
  create: (req, res) => {
    //req.body.pwd = bcrypt.hashSync(req.body.pwd, 10);
      user.create(req.body)
        .then(helper.respondAsJSON(res))
        .catch(helper.handleError(res));
    },
    login: (req,res) =>{
      let username = req.body.user_name;
      let pass = req.body.password;
      user.findOne({user_name : username })
      .then(u=>{
        if(u.password == pass)
        {
          res.send("Successful login");
        }
        else
        {
          res.send("unsuccessful");
        }
      })
     // const match = bcrypt.compare(pass, u.pwd);
    }
};