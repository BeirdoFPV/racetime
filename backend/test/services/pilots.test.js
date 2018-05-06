const assert = require('assert');
const app = require('../../src/app');

describe('\'pilots\' service', () => {
  it('registered the service', () => {
    const service = app.service('pilots');

    assert.ok(service, 'Registered the service');
  });
});
