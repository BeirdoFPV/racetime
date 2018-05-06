// Initializes the `tracks` service on path `/tracks`
const createService = require('feathers-nedb');
const createModel = require('../../models/tracks.model');
const hooks = require('./tracks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tracks',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tracks', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tracks');

  service.hooks(hooks);
};
