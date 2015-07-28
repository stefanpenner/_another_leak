import Ember from 'ember';

export default Ember.Component.extend({
  finished: true,
  firstObject: Ember.computed.readOnly('items.firstObject'),
  items: Ember.computed('showMoving', 'finished', function() {
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
