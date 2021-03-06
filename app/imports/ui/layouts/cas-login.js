import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Profiles } from '../../api/profile/profile.js'

Template.Cas_Login.events({
  /**
   * Handle the click on the logout link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-logout': function casLogout(event) {
    event.preventDefault();
    Meteor.logout();
    return false;
  },

  /**
   * Handle the click on the login link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-login': function casLogin(event, instance) {
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };
    Meteor.loginWithCas(callback);
    return false;
  },
});

// Here's how to do the required initialization for Semantic UI dropdown menus.
Template.Cas_Login.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown({
    action: 'select',
  });
});

Template.Cas_Login.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },

  ToS: function ToS() {
    //Find profile of user
    const username = Meteor.user().profile.name;
    let profile = Profiles.findOne({ 'username': username });

    //If no current profile exists, make an empty one.
    if (profile == undefined) {
      const id = Profiles.insertOne(
          {
            'first': '',
            'last': '',
            'username': username,
            'interest': '',
            'major': '',
            'agreedToS': false,
          },
      );
      profile = Profiles.findOne(id);
    }

    // Only pop up if they haven't agreed to ToS yet.
    if (profile.agreedToS != true) {
      // If they do not agree to ToS, log them out. This can be changed later.
      if (confirm("Do you agree to this website's rules?\n" +
              "\n" +
              "1. Don't post nonsense.\n" +
              "2. Don't harass others.\n" +
              "3. You will be banned if we think you hurt the site.") != true) {
        alert('Well bye then.');
        Meteor.logout();
      }
      // Otherwise update their ToS agreement field.
      else {
        Profiles.update(profile._id, { $set: { 'agreedToS': true } });
      }
    }

    return false;
  }
});
