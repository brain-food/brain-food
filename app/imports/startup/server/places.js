import { Places } from '../../api/places/places.js'
import { _ } from 'meteor/underscore';

const placeSeeds = [
  {
    placename: "Nijiya Market",
    distance: 10,
    ingredients: [
        "bread",
        "cheese",
        "sushi",
        "produce",
        "fish",
        "rice",
    ],
    image: "/images/nijiyaMarket.jpg",
  },
  {
    placename: "Longs Drugs",
    distance: 7,
    ingredients: [
      "canned salmon",
      "condiments",
      "bread",
      "cheese",
      "eggs",
    ],
    image: "data:image/jpeg;base64,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",
  },
];

console.log(Places.find().count());

if(Places.find().count() < 2) {
  _.each(placeSeeds, function seedPlace(place) {
    console.log(Places.find().count());
    Places.insert(place);
  });
}