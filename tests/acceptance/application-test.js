import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'leaks/tests/helpers/start-app';

var application;

module('Acceptance | application', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /application', function(assert) {
  visit('/');

  click('button');
  andThen(function() {
    var listeners = application.__container__.cache["route:application"].currentModel[0].__ember_meta__.listeners['moving:change'];
    assert.equal(listeners.length, 0);
  });

  click('button');
  andThen(function() {
    var listeners = application.__container__.cache["route:application"].currentModel[0].__ember_meta__.listeners['moving:change'];
    assert.equal(listeners.length, 0);
  });
});
