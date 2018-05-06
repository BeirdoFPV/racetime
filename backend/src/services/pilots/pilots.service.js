// Initializes the `pilots` service on path `/pilots`
const createService = require('feathers-nedb');
const createModel = require('../../models/pilots.model');
const hooks = require('./pilots.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pilots',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pilots', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pilots');

  service.hooks(hooks);
};
