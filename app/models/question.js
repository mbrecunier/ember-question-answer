import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  ask: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),

  favoriteQuestions: Ember.inject.service(),
  favorited: Ember.computed('favoriteQuestions.questions.[]', function() {
    return this.get('favoriteQuestions.questions').contains(this);
  })
});
