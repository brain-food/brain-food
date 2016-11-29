import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Comments = new Mongo.Collection('Comments');

/**
 * Schema for Comments
 */
export const CommentSchema = new SimpleSchema({
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

Comments.attachSchema(CommentSchema);
