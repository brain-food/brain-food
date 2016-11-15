import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Recipes = new Mongo.Collection('Recipes');

/**
 * Schema for Recipes
 */
export const RecipeSchema = new SimpleSchema({
      recipename: {
        label: 'recipename',
        type: String,
        optional: false,
        max: 50,
      },
      type: {
        label: 'type',
        type: String,
        optional: false,
        max: 50,
      },
      cost: {
        label: 'cost',
        type: Number,
        optional: false,
      },
      cooktime: {
        label: 'cooktime',
        type: Number,
        optional: false,
      },
      preptime: {
        label: 'preptime',
        type: Number,
        optional: false,
      },
      description: {
        label: 'description',
        type: String,
        optional: false,
        max: 5000,
      },
      instructions: {
        label: 'instructions',
        type: [String],
        optional: false,
      },
      ingredients: {
        label: 'instructions',
        type: [String],
        optional: false,
      },
      image: {
        label: 'image',
        type: String,
        optional: false,
      },
      username:  {
        label: 'username',
        type: String,
        optional: false,
      },
    },
);

Recipes.attachSchema(RecipeSchema);
