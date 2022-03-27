function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [

      ],
      lunch: [

      ],
      dinner: [

      ] }
  }
}

function addMenuItem(restaurantObj, menuItem) {
  if (!restaurantObj.menus[menuItem.type].includes(menuItem)) {
    return restaurantObj.menus[menuItem.type].push(menuItem);
  }
}

function removeMenuItem(restaurantObj, menuItemName, menuItemType) {
  for(var i = 0; i < restaurantObj.menus[menuItemType].length; i++) {
    if(restaurantObj.menus[menuItemType][i].name === menuItemName) {
      restaurantObj.menus[menuItemType].splice([i], 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`;
    }
   }
   return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
  }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
