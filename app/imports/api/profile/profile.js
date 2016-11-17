import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const Profiles = new Mongo.Collection('Profile');

export const ProfileSchema = new SimpleSchema({
      owner:{
        label: 'owner',
        type: String,
        optional: false,
        max: 50,
      },
      first: {
        label: 'first',
        type: String,
        optional: false,
        max: 50,
      },
      last: {
        label: 'last',
        type: String,
        optional: false,
        max: 50,
      },
      interest: {
        label: 'interest',
        type: String,
        optional: false,
        max: 1000,
      },
      major: {
        label: 'major',
        type: String,
        optional: false,
        max: 100,
      },
    },
);

Profiles.attachSchema(ProfileSchema);
