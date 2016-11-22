import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Profiles, ProfileSchema } from '../../api/contacts/contacts.js';

/* eslint-disable object-shorthand, no-unused-vars */

const displayErrorMessages = 'displayErrorMessages';

Template.Edit_Account_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Profiles');
  });
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ProfileSchema.namedContext('Edit_Account_Page');
});


Template.Edit_Account_Page.helpers({
  profileField(fieldName) {
    const profile = Profiles.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return profile && profile[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

/*Template.Edit_Contact_Page.onRendered(function enableSemantic() {
 const template = this;
 template.subscribe('StudentData', () => {
 // Use this template.subscribe callback to guarantee that the following code executes after subscriptions OK.
 Tracker.afterFlush(() => {
 // Use Tracker.afterFlush to guarantee that the DOM is re-rendered before calling JQuery.
 template.$('select.ui.dropdown').dropdown();
 template.$('.ui.selection.dropdown').dropdown();
 template.$('select.dropdown').dropdown();
 template.$('.ui.checkbox').checkbox();
 template.$('.ui.radio.checkbox').checkbox();
 });
 });
 });*/

Template.Edit_Contact_Page.events({
  'submit .profile-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const first = event.target.first.value;
    const last = event.target.last.value;
    const interest = event.target.interest.value;
    const major = event.target.major.value;
    const username = Meteor.user().profile.name;
    const agreedToS = true;
    const updatedProfile = { first, last, interest, major, username, agreedToS};
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ProfileSchema.clean(updatedProfile);
    // Determine validity.
    instance.context.validate(updatedProfile);
    if (instance.context.isValid()) {
      Profiles.update(FlowRouter.getParam('_id'), { $set: updatedProfile });
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Account_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});


