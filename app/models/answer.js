import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  entry: DS.belongsTo('question', {async: true})
});
