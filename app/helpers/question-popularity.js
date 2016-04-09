import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];
  var popularity;

  if(question.get('answers').get('length') === 0) {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span><span>New!!</span>');
  } else if (question.get('answers').get('length') <=5) {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-pencil"></span><span>Needs More Answers</span>');
  } else {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span><span>Hot Topic!</span>');
  }
  return popularity;
}

export default Ember.Helper.helper(questionPopularity);
