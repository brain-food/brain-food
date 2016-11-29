import { Comments } from '../../api/comments/comments.js';
import { _ } from 'meteor/underscore';

/**
 * A list of recipes to pre-fill the Collection.
 * @type {*[]}
 */

const commentSeeds = [
  {
    comment: "The Market is so cool.  Like, totally.  Like, my friend asked me if I wanted to eat a burger for lunch and I was like, \"As if!\"  I'm totally eating fruits and veggies from The Market instead!",
    yea: 0,
    nay: 0,
  },
  {
    comment: "M is for Market, that's good enough for me.  M is for Market, that's good enough for me.  M is for Market, that's good enough for me!  Market, Market, Market starts with M.",
    yea: 0,
    nay: 0,
  },
];

/**
 * Initialize the contacts collection if empty with seed data.
 */
if (Comments.find().count() === 0) {
  _.each(commentSeeds, function seedComment(comment) {
    Comments.insert(comment);
  });
}
