import DS from 'ember-data';

// use JSONAPIAdapter to access data from the JSON API 
export default DS.JSONAPIAdapter.extend({
	host: 'http://private-227b9-jsonapifizzbuzz.apiary-mock.com'
});

