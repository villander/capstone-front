import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  activate () {
    if (!this.get('isAuthenticated')) {
      this.transitionTo('sign-in');
    }
  },
  actions: {
    createEvent(events){
      console.log(events)
      let newEvent = this.get('store').createRecord('event', events)
      newEvent.save()
      this.transitionTo('events')
    }
  }
});
