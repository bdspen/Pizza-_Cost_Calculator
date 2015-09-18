describe('Pizza', function() {
  it('creates a new pizza object with toppings', function() {
    var testPizza = new Pizza("small", possibleToppings[0]);
    expect(testPizza.size).to.equal("small", ".50");
  });
});
