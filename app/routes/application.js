import Ember from 'ember';

var model = Ember.Object.extend({
  speed: 0,
  moving: Ember.computed('speed', function() {
    return this.get('speed') > 0;
  })
});

export default Ember.Route.extend({
  model: function() {
    return [model.create({ speed: 0 })];
  },
});
