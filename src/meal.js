function nameMenuItem(foodItem) {
  return `Delicious ${foodItem}`;
}

function createMenuItem(foodName, foodPrice, foodType) {
  return {
    name: foodName,
    price: foodPrice,
    type: foodType
  };
}

function addIngredients(ingredientItem, ingredients) {
  if(!ingredients.includes(ingredientItem)) {
    return ingredients.push(ingredientItem);
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  var tenPercent = (price * .10);
  return price - tenPercent;
}

function createRecipe(recipeTitle, recipeIngredients, recipeType) {
  return {
    title: recipeTitle,
    ingredients: recipeIngredients,
    type: recipeType
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
