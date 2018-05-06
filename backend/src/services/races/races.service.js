// Initializes the `races` service on path `/races`
const createService = require('feathers-nedb');
const createModel = require('../../models/races.model');
const hooks = require('./races.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'races',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/races', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('races');

  service.hooks(hooks);
};
