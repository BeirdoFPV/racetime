const assert = require('assert');
const app = require('../../src/app');

describe('\'races\' service', () => {
  it('registered the service', () => {
    const service = app.service('races');

    assert.ok(service, 'Registered the service');
  });
});
