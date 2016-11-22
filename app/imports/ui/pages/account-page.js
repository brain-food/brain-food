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
    const username = Meteor.user().profile.name;
    const profile = Profiles.findOne('username': username);
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return profile && profile[fieldName];
  },
  profileList() {
    return Profiles.find();
  },
});

