describe("pingQualifiers", function(anyNumber) {
  it("will only accept positive numbers", function () {
    expect(pingQualifiers(-1)).to.equal("Please only enter a positive number.");
  });
  it("will only accept integers", function () {
    expect(pingQualifiers(1.5)).to.equal("Please enter only a whole, positive number.");
  });

  it("will change multiples of 15 to 'pingpong'", function () {
    expect(pingQualifiers(30)).to.equal("pingpong");
  });

  it("will change any multiple of 5 to 'pong'", function () {
    expect(pingQualifiers(5)).to.equal("pong");
  });

  it("will change any multiple of 3 to 'ping'", function () {
    expect(pingQualifiers(3)).to.equal("ping");
  });

  it("returns numbers unchanged if they're not multiples of 3 or 5", function () {
    expect(pingQualifiers(1)).to.equal(1);
  });
});

describe("pingLoop", function() {
  it("will count/increment by one from zero until reaching chosen endNumber", function() {
    expect(pingLoop(5)).to.eql([1,2,"ping",4,"pong"]);
    });
});

// A web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:
//
// Numbers divisible by 3 are replaced with "ping"
// Numbers divisible by 5 are replaced with "pong"
// Numbers divisible by 15 are replaced with "pingpong"
// A user should be able to enter a new number and see new results over and over again.
