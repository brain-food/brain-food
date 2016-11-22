import { Recipes } from '../../api/recipes/recipes.js';
import { _ } from 'meteor/underscore';

/**
 * A list of recipes to pre-fill the Collection.
 * @type {*[]}
 */


const recipeSeeds = [
  {
    recipename: "Easy Sirloin Steak",
    type: "Protein",
    cost: 350,
    cooktime: 12,
    preptime: 30,
    description: "Cooking a perfect steak is easier than it seems. All you need is a sturdy pan, salt, pepper, olive oil, and a solid cooking technique. For this pan-seared method, start by letting the steak sit at room temperature for at least 30 minutes so it comes up to room temp and will cook evenly. Then, just sprinkle on salt and pepper, rub on some oil, and get your pan really hot. Lay the steak in the pan and don’t mess with it until it’s ready to turn. In about 8 minutes, you’ll have a perfectly cooked steak to serve with a potato gratin.",
    instructions: [
      "1. Remove the steak from the refrigerator and let it come to room temperature, about 30 to 45 minutes.",
      "",
      "2. Season the steak on both sides with the salt and pepper. Rub both sides with the olive oil and set aside.",
      "",
      "3. Heat a medium heavy-bottomed frying pan (not nonstick!) over high heat until very hot but not smoking, about 3 to 4 minutes. (If the pan gets too hot and starts to smoke, take it off the heat to cool a bit.) Place the steak in the pan and let it cook undisturbed until a dark crust forms on the bottom, about 3 to 4 minutes.",
      "",
      "4. Flip the steak using tongs or a spatula and cook until it’s medium rare, about 3 to 4 minutes more. To check for doneness, use your finger to press on the steak: It should be firm around the edges but still give in the center. You can also use an instant-read thermometer; it should read about 125°F to 130°F.",
      "",
      "5. Transfer the steak to a cutting board and let it rest for at least 5 minutes before serving.",
    ],
    ingredients: [
      "1 New York strip steak (1-1/4- to 1-1/2-inch-thick, about 8 ounces)",
      "1 1/2 teaspoons kosher salt",
      "1/4 teaspoon freshly ground black pepper",
      "1 teaspoon olive oil",
    ],
    image: "/images/easySirloinSteak.jpg",
    username: "clintmor",
  },
  {
    recipename: "Microwave Sweet Potato",
    type: "Vegetable",
    cost: 80,
    cooktime: 7,
    preptime: 5,
    description: "Sometimes you're in a rush and you need a little snack; or you just don't like cooking. A microwaved sweet potato can be surprisingly filling, is quite tasty, and is actually relatively healthy.",
    instructions: [
      "1. Stick the potato in the microwave.",
      "2. Turn on the microwave for some amount of time. You have to just test this to see what time is right.",
      "Done.",
    ],
    ingredients: [
      "1 sweet potato",
    ],
    image: "/images/microwaveSweetPotato.jpg",
    username: "clintmor",
  },
];

/**
 * Initialize the contacts collection if empty with seed data.
 */
if (Recipes.find().count() === 0) {
  _.each(recipeSeeds, function seedRecipe(recipe) {
    Recipes.insert(recipe);
  });
}
