import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Recipes } from '../../api/recipes/recipes.js';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Food_Item_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Recipes');
  });
});

Template.Food_Item_Page.helpers({
  recipeField(fieldName) {
    const recipe = Recipes.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return recipe && recipe[fieldName];
  },
  recipeId() {
    return FlowRouter.getParam('_id');
  },
  owner() {
    return Meteor.user().profile.name === Recipes.findOne(FlowRouter.getParam('_id')).username;
  },
});

Template.Food_Item_Page.events({
  'click #edit-button'() {
    let path = '/edit-food/' + FlowRouter.getParam('_id');
    FlowRouter.go(path);
  }
});