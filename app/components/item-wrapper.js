import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.model = [
      { moving: true }
    ];
    this.finished = true;
  },

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
