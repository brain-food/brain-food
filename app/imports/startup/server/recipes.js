import { Recipes } from '../../api/recipes/recipes.js';
import { _ } from 'meteor/underscore';

/**
 * A list of recipes to pre-fill the Collection.
 * @type {*[]}
 */


const recipeSeeds = [
  {                                                 //Clint
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
  {                                                 //Clint
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
  {                                                 //Kea
    recipename: "Veggie pizza toast",
    type: "Pizza",
    cost: 3.00,
    cooktime: 3,
    preptime: 5,
    description: "How much easier does it get than toast? I don't know; but you can add stuff and make that toast healthier, make you fuller, and most importantly taste better.",
    instructions: [
      '1. Cut up vegetables so that they will fit on the slice of bread.',
      '2. Microwave the sauce.',
      '3. Optionally, cook the vegetables beforehand in a pan. Or just microwave them.',
      '4. Put vegetables, sauce, and cheese on the bread.',
      '5. Put it all in a toaster oven and toast till the cheese melts and starts turning brown.',
      'Done.',
    ],
    ingredients: [
      '1 Slice of bread',
      'Vegetables of choice (as much as you want, but make sure it fits on the bread.)',
      'Sauce of choice (optional)',
      'Cheese',
    ],
    image: "https://sparkpeo.hs.llnwd.net/e2/guid/Vegetarian-Pizza-Toast-RECIPE/c3c8a090-067b-4f4b-97c8-2aa2a8044ce9.jpg",
    username: "keal",
  },
  {                                                  //Kea
    recipename: "S&B Curry",
    type: "Stew",
    cost: 80,
    cooktime: 45,
    preptime: 15,
    description: "S&B curry. It tastes pretty much like what you can get at a restaurant. Ever been to CoCo curry house? It's better than that. Serve with rice or be creative.",
    instructions: [
      "1. Cut up vegetables and meat into bite-sized pieces. The onions can be diced or minced depending on whether you want to see them in the curry or not. It's better to have the ingredients at" +
      " room temperature, but it's fine if they've been refrigerated.",
      "2. Fry the meat in a pan using olive oil and butter. Leave on the side for now.",
      "3. Put any oil in a pot (enough to cover the bottom). Put a small piece of onion in the oil.",
      "4. Once the onion starts to sizzle, put the rest of the vegetables inside and fry until onions start browning.",
      "5. Add the meat to the pot and add water to cover all the ingredients. Let it come to a boil.",
      "6. Once boiling, remove oil and froth that comes floating up.",
      "7. Add curry roux and stir in until completely dissolved. Adjust water if the mixture is too thick.",
      "8. Simmer for at least 10 minutes. Make sure the bottom of the pot doesn't burn by stirring occasionally.",
      "Done.",
    ],
    ingredients: [
      'Pack of S&B curry roux. Look at the back of the box to see how much of it to use.',
      'All of the below in a 1:1 ratio:',
      'Meat of choice. Seafood works too.',
      'Potatoes',
      'Carrots',
      'Onions',
    ],
    image: "https://cbchintaicom-singlehack.s3.amazonaws.com/content/uploads/2015/04/97ded5bca4e2b1e65b7d43046478fd51.jpg",
    username: "keal",
  },
  {                                         //Kea
    recipename: "Tomato scrambled eggs",
    type: "Eggs",
    cost: 80,
    cooktime: 2,
    preptime: 2,
    description: "My favorite snack: Scrambled eggs with tomatoes. Put it on some toast, fry up some bacon, put some greens on the side, and you've got a hearty breakfast.",
    instructions: [
      "1. Cut up some tomatoes the way you want. I like to cut cherry tomatoes into quarters.",
      "2. Beat the eggs in a bowl.",
      "3. Add butter to a pan. When the butter starts bubbling, add the tomatoes and fry them.",
      "4. Once the tomatoes' skin starts to peel, add the eggs.",
      "5. Stir the eggs to make it cook evenly.",
      "6. When there's just a bit of moisture left in the eggs, turn off the heat.",
      "Done.",
    ],
    ingredients: [
      "1:1 ratio of tomatoes to eggs.",
      "Some butter. About the amount you would use on toast",
    ],
    image: "http://www.annabelkarmel.com/wp-content/uploads/2014/08/Scrambled-Eggs-with-Tomato-Onion-3.jpg",
    username: "keal",
  },
  {                                         //Steven
    recipename: "Microwave Oatmeal",
    type:"Starch",
    cost: 800,
    cooktime: 3,
    preptime: 1,
    description: "A classic breakfast for a broke college student, doesn't taste extremely good but it's pretty nutritious and won't have you regretting it later.",
    instructions: [
        "1. Place 1/3rd cup of oatmeal into the bowl.",
        "2. Place 1 cup of water into the bowl.",
        "3. Microwave for 3 minutes.",
        "4. Enjoy!",
    ],
    ingredients: [
        "1. Water",
        "2. Oatmeal",
    ],
    image:"http://www.oneresult.com/sites/default/files/u4/Oatmeal.jpeg",
    username: "sbraun",
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
