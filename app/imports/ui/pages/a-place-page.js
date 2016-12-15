import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Places } from '../../api/places/places.js';

/* eslint-disable object-shorthand, no-unused-vars */

Template.A_Place_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Places');
  });
});


Template.A_Place_Page.helpers({
  placeField(fieldName) {
    const place = Places.findOne(FlowRouter.getParam('_id'));
    return place && place[fieldName];
  },
});
