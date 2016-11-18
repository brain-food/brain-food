import { Template } from 'meteor/templating';
import { Places } from '../../api/places/places.js';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Add_Location_Page.helpers({
    locations() {
  return Places.find();
},
});

Template.Add_Location_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Places');
  });
});

Template.Add_Location_Page.events({});

Template.Add_Location_Page.onRendered(function (){
  this.$('.dropdown').dropdown({
    allowAdditions: true,
  });
});
