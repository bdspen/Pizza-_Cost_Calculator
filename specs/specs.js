describe('Pizza', function() {
  it('creates a new pizza with given specifications', function() {
    var testPizza = new Pizza("small", 10);
    expect(testPizza.size).to.equal("small");
    expect(testPizza.price).to.equal(10);

  });
});



// describe('addTopping', function() {
//   it('adds a one dollar topping', function() {
//     expect(sizeSelect()).to.equal(10);
//   });
//   it('returns a price for a large pizza', function() {
//     expect(sizeSelect()).to.equal(15);
//   });
//
// });
