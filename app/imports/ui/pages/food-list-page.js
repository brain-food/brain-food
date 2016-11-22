import { Template } from 'meteor/templating';
import { Recipes } from '../../api/recipes/recipes.js';

Template.Food_List_Page.helpers({
  recipeList() {        // returns entire recipe list
    return Recipes.find();
  },
  shortDescription(description) {
    if (description.split(' ').length > 20) {
      return description.split(" ").splice(0, 20).join(" ") + "...";
    }
    return description;
  },
  inDollars(cents) {
    return (cents / 100).toFixed(2);
  },
});

Template.Food_List_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Recipes');
  });
});