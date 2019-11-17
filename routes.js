
'use strict';

let userRoutes = require('./app/routes/user.routes');
let ownerRoutes = require('./app/routes/owner.routes');

module.exports = (app) => {
  app.use('/empowerEd/user', userRoutes);
  app.use('/empowerEd/owner',ownerRoutes);
};