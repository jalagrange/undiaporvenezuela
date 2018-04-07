import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects');
  this.route('people', function() {
    this.route('show', { path: '/:person_id' });
  });
  this.route('tasks');
});

export default Router;
