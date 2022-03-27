function takeOrder(foodOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(foodOrder);
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice([i], 1);
    }
  }
}

function listItems(deliveryOrders) {
  var itemList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemList.push(deliveryOrders[i].item);
  }
  return itemList.join(', ');
}

function searchOrder(deliveryOrders, itemName) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemName) {
      return true
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
