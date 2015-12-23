import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	date: DS.attr('date'),
	useragent: DS.attr('string'),
	message: DS.attr('string'),
	username: DS.attr('string'),
  pic: DS.attr(),
  /*	use computed property to adust the look of the username
			- created and used a new attribute 'fullName' to code the
				computed functionality in order to keep the integrity of 
				the original data. This is why I chose to leave this 
				functionality here instead of moving it to a controller.
  */
  fullName: Ember.computed('username', function() {
  		var str = `${this.get('username')}`;
			return str
				// replace dot/period with space
				.replace(/\./g, ' ') 
				// remove number
				.replace(/[0-9]/g, '') 
				// capitalize first char in each word
				.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
		})
});
