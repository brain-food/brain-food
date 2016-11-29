import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Recipes, RecipeSchema } from '../../api/recipes/recipes.js';

const displayErrorMessages = 'displayErrorMessages';

Template.Edit_Food_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = RecipeSchema.namedContext('Edit_Food_Page');
});

Template.Edit_Food_Page.helpers({
  recipeField(fieldName) {
    const recipe = Recipes.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return recipe && recipe[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

Template.Edit_Food_Page.events({
  'click .add-ingredient'() {
    const ingredientsList = document.getElementById('ingredients');
    const ingredientTemplate = ingredientsList.firstElementChild.cloneNode(true);
    ingredientTemplate.firstElementChild.value = "";
    ingredientsList.appendChild(ingredientTemplate);

    if (document.getElementById('ingredients').childElementCount > 1) {
      _.each(document.getElementsByName('remove-ingredient'), (element) => {
            element.style.visibility = 'visible';
          }
      );
    }
  },
  'click .remove-ingredient'(event){
    let toBeRemoved = event.target.parentElement;
    toBeRemoved.parentNode.removeChild(toBeRemoved);

    if (document.getElementById('ingredients').childElementCount <= 1) {
      document.getElementsByName('remove-ingredient')[0].style.visibility = 'hidden';
    }
  },
  'click .test-image'()
  {
    document.getElementById('picture').src = document.getElementById('image').value;
  },
  'submit .recipe-data-form'(event, instance)
  {

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

    //For making editing ingredients more intuitive.
    const ingredients = [];
    _.each(document.getElementById('ingredients').children, (element, index) => {
      ingredients[index] = element.firstElementChild.value;
    });

    const image = event.target.image.value;
    const username = Meteor.user().profile.name;

    //Get Put all variables into one object
    const newRecipe = { recipename, type, cost, cooktime, preptime, description, instructions, ingredients, image, username };

    // Clear out any old validation errors.
    instance.context.resetValidation();
    console.log(instance.context.isValid());
    // Invoke clean so that newRecipe reflects what will be inserted.
    RecipeSchema.clean(newRecipe);

    // Determine validity.
    instance.context.validate(newRecipe);
    console.log(instance.context.isValid());
    if (instance.context.isValid()) {
      instance.messageFlags.set(displayErrorMessages, false);
      Recipes.insert(newRecipe);
      FlowRouter.go('Food_List_Page'); //'Food_Item_Page'+ '/' + newRecipe._id
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
