import Ember from 'ember';

var model = Ember.Object.extend({
  speed: 0,
  moving: Ember.computed('speed', function() {
    return this.get('speed') > 0;
  })
});

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.model = [model.create()];
  },

  finished: true,
  firstObject: Ember.computed('items.[]', function() {
    return this.get('items')[0];
  }),
  items: Ember.computed('finished', function() {
    if (this.get('finished')) {
      return [];
    }
    return this.get('model');
  }),

  actions: {
    cycleComponents: function() {
      this.set('finished', false);
      Ember.run.later(() => {
        this.set('finished', true);
      });
    }
  }
});
