'use strict'

     // Step 1 Declare a variable that holds an empty object literal (your meal recipe).
let recipe = {
    // Step 2 Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
    meal: 'Protein Shake',
    Serves: 1,
    Ingredients:[ '200 ml water', '1 scoop of protein', '1 banana', '1 tablespoon peanut butter', 'cinnamon'],
};
// Step 3 Log each property out separately, using a loop (for, while or do/while)
for (let property in recipe) {
    console.log(`${property}: ${recipe[property]}`);

  }
