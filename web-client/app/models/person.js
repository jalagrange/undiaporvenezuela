import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.attr(),
  age: DS.attr(),
  profileimage: DS.attr(),
  description: DS.attr()
});
