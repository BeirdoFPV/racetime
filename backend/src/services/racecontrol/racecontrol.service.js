// Initializes the `racecontrol` service on path `/racecontrol`
const createService = require('./racecontrol.class.js');
const hooks = require('./racecontrol.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'racecontrol',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/racecontrol', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('racecontrol');

  service.hooks(hooks);
};
