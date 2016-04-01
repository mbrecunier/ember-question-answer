import Ember from 'ember';

export default Ember.Component.extend({
  editMode: false,
  actions: {
    editQuestionForm() {
      this.set('editMode', true);
    },
    edit(question) {
      var params = {
        ask: this.get('ask'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('editMode', false);
      this.sendAction('edit', question, params);
    }
  }
});
