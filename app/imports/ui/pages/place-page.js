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
  commentList() {        // returns entire recipe list
    return Comments.find();
  },
});
