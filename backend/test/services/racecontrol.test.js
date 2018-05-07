const assert = require('assert');
const app = require('../../src/app');

describe('\'racecontrol\' service', () => {
  it('registered the service', () => {
    const service = app.service('racecontrol');

    assert.ok(service, 'Registered the service');
  });
});
