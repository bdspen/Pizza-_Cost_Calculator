var prices = ["10", "12.50", "15"];
var sizes =["small", "medium", "large"];
var toppingTotal = "0";

//toppings
var possibleToppings = [
pepperoni = ".50",
mushroom = ".50",
peppers = ".50",
onions = ".50",
fetaOlive = "1.00",
bacon = "1.00"
];

function CalculatePrice() {
  toppingTotal = Pizza.topping[0];
  return toppingTotal;
  }

// function CalculatePrice() {
//   var pizzaPrice =
//   for(var i = 0; i < toppings.length; i++){
//     var toppingTotal += Pizza.topping[i];
//     return toppingTotal;
//   }
// }

//Pizza Constructor
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}
