import Ember from 'ember';

export default Ember.Component.extend({
  moving: Ember.computed.readOnly('instance.moving'),
});
