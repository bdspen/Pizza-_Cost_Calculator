describe('Pizza', function() {
  it('creates a pizza object', function() {
    var testPizza = new Pizza(prices.small, possibleToppings.pepperoni);
    expect(testPizza.size).to.equal('10');
    expect(testPizza.toppings).to.equal('.50');
  });

  it('creates a pizza object with two toppings', function() {
    var testPizza = new Pizza(prices.small, [possibleToppings.pepperoni, possibleToppings.bacon]);
    expect(testPizza.size).to.equal('10');
    expect(testPizza.toppings).to.eql(['.50', '1.00']);
  });
});

describe('pizza Price', function() {
  it('calculates the price of a pizza order', function() {
    var testPizza = new Pizza(prices.small, possibleToppings.pepperoni);
    expect(testPizza.pizzaPrice()).to.equal('10.50');
  });
});

describe('orderTotal', function() {
  it('calculates the total order, with one pizza', function() {
    var pizzaOrder = [10.50];
    expect(orderTotal(pizzaOrder)).to.equal(10.50);
  });

  it('calculates the total order, with multiple pizzas', function() {
    var pizzaOrder = [10.50, 15.50];
    expect(orderTotal(pizzaOrder)).to.equal(26);
  });
});
