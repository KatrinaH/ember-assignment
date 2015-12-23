import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	date: DS.attr('date'),
	useragent: DS.attr('string'),
	message: DS.attr('string'),
	username: DS.attr('string'),
  pic: DS.attr(),
  fullName: Ember.computed('username', function() {
  		var str = `${this.get('username')}`;
			return str.replace(/\./g, ' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		})
});
