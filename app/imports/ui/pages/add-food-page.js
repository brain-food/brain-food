import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Recipes, RecipeSchema } from '../../api/recipes/recipes.js';

const displayErrorMessages = 'displayErrorMessages';

Template.Add_Food_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = RecipeSchema.namedContext('Add_Food_Page');
});

Template.Add_Food_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

Template.Add_Food_Page.events({
  'submit .recipe-data-form'(event, instance) {

    event.preventDefault();

    // Get fields and put them in variables
    const recipename = event.target.recipename.value;
    const type = event.target.type.value;
    const cost = event.target.cost.value * 100;
    const cooktime = event.target.cooktime.value;
    const preptime = event.target.preptime.value;
    const description = event.target.description.value;
    //For formatting purposes, we split the instructions into an array.
    const instructionsString = event.target.instructions.value;
    const instructions = instructionsString.split('\n', -1);
    //For making adding ingredients more intuitive.
    const ingredients = [];
    _.each(document.getElementById('ingredients').children, (element, index) => {
      ingredients[index] = element;
    });

    const image = "";
    const username = Meteor.user().profile.name;

    //Get Put all variables into one object
    const newRecipe = { recipename, type, cost, cooktime, preptime, description, ingredients, instructions };

    // Clear out any old validation errors.
    instance.context.resetValidation();

    // Invoke clean so that newStudentData reflects what will be inserted.
    RecipeSchema.clean(newRecipe);

    // Determine validity.
    instance.context.validate(newRecipe);
    if (instance.context.isValid()) {
      instance.messageFlags.set(displayErrorMessages, false);
      Recipes.insert(newRecipe);
      FlowRouter.go('Food_List_Page'); //'Food_Item_Page'+ '/' + newRecipe._id
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
  'click .add-ingredient'() {
    if (document.getElementById('ingredients').childElementCount <= 1) {
      document.getElementsByName('remove-ingredient')[0].style.visibility='visible';
    }

    let ingredientsList = document.getElementById('ingredients');
    let ingredientTemplate = ingredientsList.firstElementChild.cloneNode(true);
    ingredientTemplate.firstElementChild.value = "";
    ingredientsList.appendChild(ingredientTemplate);
  },
  'click .remove-ingredient'(event) {
    let toBeRemoved = event.target.parentElement;
    toBeRemoved.parentNode.removeChild(toBeRemoved);

    if(document.getElementById('ingredients').childElementCount <= 1) {
      document.getElementsByName('remove-ingredient')[0].style.visibility='hidden';
    }
  }
});

