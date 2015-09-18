var pizzaOrder = [];
var toppingSet = [];

var prices = {small: "10", medium: "12.50", large: "15"};
//toppings
var possibleToppings = {
pepperoni: ".50",
mushroom: ".50",
peppers: ".50",
onions: ".50",
fetaOlive: "1.00",
bacon: "1.00"
};

//Pizza Constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function(){
  var price = this.size + this.toppings;
  pizzaOrder.push(price);
  return pizzaOrder[0];
}

// var toppingSet = $('input:topping-checkbox:checked').map(function () {
//   return this.toppingSet;
//   });

// function CalculatePrice() {
//   var pizzaPrice =
//   for(var i = 0; i < toppings.length; i++){
//     var toppingTotal += Pizza.topping[i];
//     return toppingTotal;
//   }
// }
