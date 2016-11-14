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

/*Template.Add_Food_Page.onRendered(function enableSemantic() {
  const instance = this;
  instance.$('select.ui.dropdown').dropdown();
  instance.$('.ui.selection.dropdown').dropdown();
  instance.$('select.dropdown').dropdown();
  instance.$('.ui.checkbox').checkbox();
  instance.$('.ui.radio.checkbox').checkbox();
});*/

Template.Add_Food_Page.events({
  'submit .recipe-data-form'(event, instance) {

    event.preventDefault();

    // Get fields and put them in variables
    const first = event.target.first.value;
    const last = event.target.last.value;
    const address = event.target.address.value;
    const telephone = event.target.telephone.value;
    const email = event.target.email.value;

    //Get Put all variables into one object
    const newRecipe = { first, last, address, telephone, email };

    // Clear out any old validation errors.
    instance.context.resetValidation();

    // Invoke clean so that newStudentData reflects what will be inserted.
    RecipeSchema.clean(newRecipe);

    // Determine validity.
    instance.context.validate(newRecipe);
    if (instance.context.isValid()) {
      instance.messageFlags.set(displayErrorMessages, false);
      Recipes.insert(newRecipe);
      FlowRouter.go('List_Food_Page'+ '/' + newRecipe._id);
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

