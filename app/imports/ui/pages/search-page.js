import { Template } from 'meteor/templating';
import { Places } from '../../api/places/places.js';
import { Recipes, RecipeSchema } from '../../api/recipes/recipes.js';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.Search_Page.helpers({
  recipes(){
    return Recipes.find();
  },
});

const searching = Recipes.find();

/*
EasySearch.createSearchIndex('recipes', {
  'field' : ['name'],
  'collection' : Recipes,
  'limit' : 20,
  'use' : 'elastic-search',
  'props' : {
    'anyField' : true
  },
  'query' : function (searchString, opts) {
    // Default query that is used for searching
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    return query;
  }
});*/
