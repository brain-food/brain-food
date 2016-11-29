import { Template } from 'meteor/templating';
import { Places, PlacesSchema } from '../../api/places/places.js';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';

const displayErrorMessages = 'displayErrorMessages';

Template.Add_Location_Page.helpers({
    locations() {
  return Places.find();
},
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages);
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  }
});

Template.Add_Location_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict
  this.messageFlags.set(displayErrorMessages, false);
  this.context = PlacesSchema.namedContext('Add_Location_Page')
  this.autorun(() => {
    this.subscribe('Places');
  });
});

Template.Add_Location_Page.events({
  'submit .places-data-form'(event, instance) {
    event.preventDefault();

    const placename = event.target.placename.value;
    const distance = event.target.distance.value;
    const ingredients = event.target.ingredient.value;
    const image = event.target.image.value;

  //  const ingredients = [];
  //  _.each(document.getElementBYId('ingredients'))

    const newPlace = { placename, distance, ingredients, image};

    instance.context.resetValidation();
    console.log(instance.context.isValid());
    PlacesSchema.clean(newPlace);

    instance.context.validate(newPlace);
    console.log(instance.context.isValid());

    if(instance.context.isValid()) {
      instance.messageFlags.set(displayErrorMessages, false);
      Places.insert(newPlace);
      FlowRouter.go("Food_Hunt_Page");

    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }

  }

});

Template.Add_Location_Page.onRendered(function (){
  this.$('.dropdown').dropdown({
    allowAdditions: true,
  });
});
