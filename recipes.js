import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Recipes = new Mongo.Collection('Recipes');

if ( Meteor.isServer ) {
  Recipes._ensureIndex( { recipename: 1, type: 1, username: 1} );
}

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
        label: 'ingredients',
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

Meteor.publish( 'recipes', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) );

  let query      = {},
      projection = { limit: 10, sort: { title: 1 } };

  if ( search ) {
    let regex = new RegExp( search, 'i' );

    query = {
      $or: [
        {recipename: regex},
        {type: regex},
        {username: regex}
      ]
    };

    projection.limit = 100;
  }

  return Recipes.find( query, projection );
});