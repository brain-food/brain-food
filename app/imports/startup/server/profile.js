import { Profiles } from '../../api/profile/profile.js'
import { _ } from 'meteor/underscore';

const profileSeeds = {
  first: "BRAIN",
  last: "GIRL",
  interest: "I want candy, bubble gum, and taffy Skip to the sweet shop with my sweetheart Sandy Got my pennies saved so I'm her sugar daddy I'm her Hume Cronyn and she's my Jessica Tandy, I want candy! put it in a pile, split it with my bitty 50/50 down the line kinda like close encounters of the cavity kind im talkin liquorice kisses, talkin chocodile smiles",
  major: "Information and Computer Sciences, B.S.",
};

if (Profiles.find().count() === 0) {
  _.each(profileSeeds, function profileRecipe(profile) {
    Profiles.insert(profile);
  });
}