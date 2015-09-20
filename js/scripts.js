//initilizes arrays for storing pizza order
var pizzaOrder = [];

//prices for size
var prices = {small: "10", medium: "12.50", large: "15"};

//toppings
var possibleToppings = {
none: "0",
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

//calculates price of Pizza based on toppings and size and
//pushes that value into an array "pizzaOrder"
Pizza.prototype.pizzaPrice = function(){
  var price = this.size + this.toppings;
  pizzaOrder.push(price);
  return pizzaOrder[0];
}
//calculates total order, multiple pizzas, from pizzaOrder array
var orderTotal = function(pizzaOrder) {
  var result = 0;
  if(pizzaOrder.length <= 1) {
    return pizzaOrder[0];
  }else{
    for(var i = 0; i < pizzaOrder.length; i++) {
      result += pizzaOrder[i];
    }
      return result;
  }
}

//start jQuery
$(document).ready(function(){
//small pizza button function.
    $("button#size-small").click(function(event){
    event.preventDefault();
    var smallPizza = new Pizza(prices.small, possibleToppings.none);
    $("#toppings").show();
    $("#size").hide();
//fix vvv
    $("order-total").text(orderTotal(pizzaOrder.push(Pizza.pizzaPrice())));
  });
//medium pizza button function
  $("button#size-medium").click(function(event){
  event.preventDefault();
  var smallPizza = new Pizza (prices.medium, possibleToppings.none);
  $("#toppings").show();
  $("#size").hide();
  $("order-total").text(orderTotal());
});
});
