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
  {                                         //Steven
    recipename: "Grilled Cheese",
    type:"Sandwich",
    cost: 200,
    cooktime: 7,
    preptime: 3,
    description: "One of my favorite recipes that I learned when I was young that combines by favorite ingredients, cheese and bread.",
    instructions: [
      "1. Turn on the stove top to level 7(high) heat.",
      "2. Smear the butter in the pan.",
      "3. Prepare the sandwich by putting the cheese in between the two pieces of bread.",
      "4. Place the bread in the pan and cook it for 3 minutes and flip over to the other side",
      "5. Cook the side for 3 more minutes, remove and wait until it cools.",
      "6. Enjoy!",
    ],
    ingredients: [
      "1. 1/2 tablespoon of butter",
      "2. 2 slices of bread",
      "3. 2 slices of cheese",
    ],
    image:"data:image/jpeg;base64,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",
    username: "sbraun",
  },
  {                                         //Steven
    recipename: "Goteborg",
    type:"Goteborg Sausage and Rice",
    cost: 800,
    cooktime: 4,
    preptime: 10,
    description: "A delicious local snack that I have been enjoying ever since I was a little boy that is extremely simple and easy to make!",
    instructions: [
      "1. Cook a cup of rice in a rice cooker or on the stove.",
      "2. Cut Goteborg sausage into desirable amount of slices.",
      "3. Turn stove onto level 7 (high) heat.",
      "4. Place as many sausages as you can fit in your pan in your pan, and place it on the stove",
      "5. Cook on this side for approximately 2 minutes and flip over",
      "6. Remove sausages from pan and remove grease with a napkin if desired",
      "7. Put rice balls on the sausages and add furikake if desired.",
      "8. Enjoy!",
    ],
    ingredients: [
      "1. Rice",
      "2. Goteborg Sausage",
      "3. Furikakae",
    ],
    image:"http://cookinghawaiianstyle.com/images/recipes/1329805137GoteborgSausageMusubi2.jpg",
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
