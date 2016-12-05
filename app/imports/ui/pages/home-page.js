import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


Template.Home_Page.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
});
