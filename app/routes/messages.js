import Ember from 'ember';

// model hook to get all data entries from the data store
export default Ember.Route.extend({
	model() {
		return this.store.findAll('message');
	}
});
