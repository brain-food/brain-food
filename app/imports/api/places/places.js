import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Places = new Mongo.Collection('Places');

/**
 * Schema for Places
 */
export const PlacesSchema = new SimpleSchema({
      placename: {
        label: 'placename',
        type: String,
        optional: false,
        max: 50,
      },
      distance: {
        label: 'cost',
        type: Number,
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
    },
);

Places.attachSchema(PlacesSchema);
