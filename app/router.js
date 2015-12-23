import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

// route for the '/messages' url
Router.map(function() {
  this.route('messages');
});

export default Router;
