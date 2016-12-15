import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Comments = new Mongo.Collection('Comments');

/**
 * Schema for Comments
 */
export const CommentSchema = new SimpleSchema({
      comment: {
        label: 'comment',
        type: String,
        optional: false,
        max: 5000,
      },
      yea: {
        label: 'yea',
        type: Number,
        optional: true,
      },
      nay: {
        label: 'nay',
        type: Number,
        optional: true,
      },
    },
);

Comments.attachSchema(CommentSchema);
