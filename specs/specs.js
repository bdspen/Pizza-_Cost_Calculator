describe('Pizza', function() {
  it('creates a new pizza object with given specifications', function() {
    var testPizza = new Pizza("small");
    expect(testPizza.size).to.equal("small");
  });
});
//
// describe('Calculate Price', function() {
//   it('returns the price of one topping', function() {
//     var testPizza = new Pizza("small", onions);
//     expect(testPizza.size).to.equal("small");
//     expect(testPizza.price).to.equal(10);
//   });
// });



// describe('addTopping', function() {
//   it('adds a one dollar topping', function() {
//     expect(sizeSelect()).to.equal(10);
//   });
//   it('returns a price for a large pizza', function() {
//     expect(sizeSelect()).to.equal(15);
//   });
//
// });
