import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Comments } from '../../api/comments/comments.js';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Place_Page.onCreated(function onCreated() {
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
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

Template.Place_Page.events({
  'click .ui.rightB.inverted.comment.button': function() {
    console.log("Hello Comment");
  },
});
