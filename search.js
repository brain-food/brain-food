import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Recipes } from '../../api/recipes/recipes.js';
import { ReactiveDict } from 'meteor/reactive-dict';

Template.search.onCreated( () => {
  let template = Template.instance();

  template.searchQuery = new ReactiveVar();
  template.searching = new ReactiveVar( false );

  template.autorun( () => {
    template.subscribe('recipes', template.searchQuery.get(), () => {
      setTimeout(() => {
        template.searching.set(false);
      }, 300);
    });
  });
});

Template.search.helpers({
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  },
  recipes() {
    let recipes = Recipes.find();
    if ( recipes ) {
      return recipes;
    }
  }
});

Template.search.events({
  'keyup [name="search"]' (event, template) {
    let value = event.target.value.trim();

    if (value != '' && event.keyCode === 13) {
      template.searchQuery.set(value);
      template.searching.set(true);
    }
    if (value === ''){
      template.searchQuery.set(value);
    }
  }
});

