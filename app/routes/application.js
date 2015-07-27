import Ember from 'ember';

var model = Ember.Object.extend({
  speed: 0,
  moving: Ember.computed('speed', function() {
    return this.get('speed') > 0;
  })
});

export default Ember.Route.extend({
  model: function() {
    var items = [];
    for (var i=0; i < 100; i++) {
      items.push(model.create({
        speed: i % 2,
      }));
    }
    return items;
  },
});
