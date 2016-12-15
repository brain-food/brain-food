import { Places } from '../../api/places/places.js'
import { Template } from 'meteor/templating';

Template.Food_Hunt_Page.helpers({
  placeList() {
    return Places.find();
  },
});

Template.Food_Hunt_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Places');
  });
});


