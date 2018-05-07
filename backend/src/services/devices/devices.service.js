// Initializes the `devices` service on path `/devices`
const createService = require('feathers-memory');
const hooks = require('./devices.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'devices',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/devices', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('devices');

  service.hooks(hooks);
};
