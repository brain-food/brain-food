import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Comments, CommentSchema } from '../../api/comments/comments.js';

/* eslint-disable object-shorthand, no-unused-vars */

const displayErrorMessages = 'displayErrorMessages';

Template.Place_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = CommentSchema.namedContext('Place_Page');
  this.autorun(() => {
    this.subscribe('Comments');
  });
});

Template.Place_Page.helpers({
  commentField(fieldName) {
    const comment = Comments.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return comment && comment[fieldName];
  },
  commentList() {        // returns entire comment list
    return Comments.find();
  },
  commentCount() {        // returns the number of comments in the list
    return Comments.find().count();
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

Template.Place_Page.events({
  'submit .place-comment-form'(event, instance) {

    event.preventDefault();

    // Get fields and put them in variables
    const comment = event.target.comment.value;

    // Put all variables into one object
    const newComment = { comment };

    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newRecipe reflects what will be inserted.
    CommentSchema.clean(newComment);

    // Determine validity.
    instance.context.validate(newComment);
    if (instance.context.isValid()) {
      instance.messageFlags.set(displayErrorMessages, false);
      let id = Comments.insert(newComment);
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
