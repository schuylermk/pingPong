describe("pingypongy", function(anyNumber) {
  it("will change any multiple of 5 to 'pong'", function () {
    expect(pingypongy(5)).to.equal("pong");
  });

  it("will change any multiple of 3 to 'ping'", function () {
    expect(pingypongy(3)).to.equal("ping");
  });

  it("returns numbers unchanged if they're not multiples of 3 or 5", function () {
    expect(pingypongy(1)).to.equal(1);
  });
  // it("will count/increment by one from zero until reaching chosen endNumber", function() {
  //   expect(pingypongy(5)).to.eql([1,2,3,4,5]);
  // });

});
















// A web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:
//
// Numbers divisible by 3 are replaced with "ping"
// Numbers divisible by 5 are replaced with "pong"
// Numbers divisible by 15 are replaced with "pingpong"
// A user should be able to enter a new number and see new results over and over again.
