import Ember from 'ember';

export default Ember.Component.extend({
  answerPopularity: Ember.computed('question.answers', function() {
    return this.get('question.answers.[].length');
  })
});
