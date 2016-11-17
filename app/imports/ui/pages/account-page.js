import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Profiles } from '../../api/profile/profile.js';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Account_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Profiles');
  });
});


Template.Account_Page.helpers({
  profileField(fieldName) {
    _id=this.userId;
    const profile = Profiles.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return profile && profile[fieldName];
  },
});

Template.registerHelper('equals', function (a,b ){
  return a === b;
})

