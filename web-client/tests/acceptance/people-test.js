import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | people', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /people', async function(assert) {
    await visit('/people');

    assert.equal(currentURL(), '/people');
  });



});
