var prices = ["10", "12.50", "15"];
var sizes = ["small", "medium", "large"];

//toppings
var possibleToppings = {
pepperoni: ".50",
mushroom: ".50",
peppers: ".50",
onions: ".50",
fetaOlive: "1.00",
bacon: "1.00"
};

// function CalculatePrice() {
//   var pizzaPrice =
//   for(var i = 0; i < toppings.length; i++){
//     var toppingTotal += Pizza.topping[i];
//     return toppingTotal;
//   }
// }


//Pizza Constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppingSet = [];
}
