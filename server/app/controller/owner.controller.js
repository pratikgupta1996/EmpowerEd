let owner = require('../models/owner.model');
let helper = require('../Helper/common.helper');

module.exports = {
  create: (req, res) => {
      owner.create(req.body)
        .then(helper.respondAsJSON(res))
        .catch(helper.handleError(res));
    }
};