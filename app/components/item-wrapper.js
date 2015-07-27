import Ember from 'ember';

export default Ember.Component.extend({
  items: Ember.computed('showMoving', 'finished', function() {
    if (this.get('finished')) {
      return [];
    }
    return this.get('model').filterBy('moving', this.get('showMoving'));
  }),

  actions: {
    cycleComponents: function() {
      this.set('finished', false);
      var i = 0;
      var cancel = window.setInterval(function() {
        Ember.run(this, function() {
          i++;
          if (i >= 3) {
            window.clearInterval(cancel);
            this.set('finished', true);
          }
          this.toggleProperty('showMoving');
        });
      }.bind(this), 200);
    },
  },
});
