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
  // Event for the add ingredient button.
  'click .add-ingredient'() {
    // If there was only one ingredient, add the delete button.
    if (document.getElementById('ingredients').childElementCount <= 1) {
      document.getElementsByName('remove-ingredient')[0].style.visibility='visible';
    }

    // Add an ingredient below the rest of the ingredients.
    const ingredientsList = document.getElementById('ingredients');
    const ingredientTemplate = ingredientsList.firstElementChild.cloneNode(true);
    ingredientTemplate.firstElementChild.value = "";
    ingredientsList.appendChild(ingredientTemplate);
  },
  // Event for the X button on ingredients.
  'click .remove-ingredient'(event) {
    // Removes an ingredient.
    let toBeRemoved = event.target.parentElement;
    toBeRemoved.parentNode.removeChild(toBeRemoved);

    // Hide delete button if there's only 1 ingredient left.
    if(document.getElementById('ingredients').childElementCount <= 1) {
      document.getElementsByName('remove-ingredient')[0].style.visibility='hidden';
    }
  },
  'submit .recipe-data-form'(event, instance) {

    event.preventDefault();

    // Get fields and put them in variables
    const recipename = event.target.recipename.value;
    const type = event.target.type.value;
    const cost = event.target.cost.value * 100;
    const cooktime = event.target.cooktime.value;
    const preptime = event.target.preptime.value;
    const description = event.target.description.value;
    const image = event.target.image.value;
    const username = Meteor.user().profile.name;

    // For formatting purposes, we split the instructions into an array. Each element in the array is a line of text.
    const instructionsString = event.target.instructions.value;
    const instructions = instructionsString.split('\n', -1);

    // Goes through every ingredient and puts it into an array.
    const ingredients = [];
    _.each(document.getElementById('ingredients').children, (element, index) => {
      ingredients[index] = element.firstElementChild.value;
    });

    // Put all variables into one object
    const newRecipe = { recipename, type, cost, cooktime, preptime, description, instructions, ingredients, image, username };

    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newRecipe reflects what will be inserted.
    RecipeSchema.clean(newRecipe);

    // Determine validity.
    instance.context.validate(newRecipe);
    if (instance.context.isValid()) {
      instance.messageFlags.set(displayErrorMessages, false);
      let id = Recipes.insert(newRecipe);
      let path = '/food-item/' + id;
      console.log(path);
      FlowRouter.go(path);
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

